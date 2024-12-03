import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
  Textarea,
  Divider,
} from "@nextui-org/react";

import BuyFilters from "@/components/BuyFilters";
import RentFilters from "@/components/RentFilters";
import FiltersIcon from "@/assets/filters.svg";

const buttonVariants = {
  visible: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: { duration: 0.085, ease: [0.4, 0, 0.2, 1] },
  },
  hidden: { scale: 0.98, opacity: 0, y: 10 },
};

function App() {
  const [inputValue, setInputValue] = useState("");
  const [category, setCategory] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const categoryName = useMemo(() => {
    switch (category) {
      case "buy":
        return "خرید";

      case "rent":
        return "رهن و اجاره";

      default:
        return "";
    }
  }, [category]);

  const onModalClose = () => {
    setCategory("");
    onOpenChange();
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <motion.main
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen flex justify-center items-center"
    >
      <div className="max-w-4xl mx-auto text">
        <section className="text-center">
          <h1 className="text-5xl font-extrabold leading-snug bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">
            کاوش کن، بجوی، هر کشصری که می‌خوای جستجو کن و خونه مدنظرت رو پیدا کن
          </h1>
          <p className="text-lg font-semibold text-slate-400 mt-4 mb-24">
            اینجا یک توضیح قرار می‌گیره که باید بگی مثلا یک دستور رو بنویس تا
            برات چیزی که می‌خوای رو آبش رو بیاریم.
          </p>
        </section>

        <div className="relative mb-4">
          <Textarea
            placeholder="هر چی دل تنگت می‌خواد سرچ کن..."
            minRows={6}
            value={inputValue}
            onChange={handleChange}
            classNames={{
              inputWrapper:
                "bg-gray-100 data-[hover=true]:bg-gray-100 group-data-[focus=true]:bg-gray-100 p-4",
              input:
                "group-data-[has-value=true]:text-slate-500 text-xl font-bold placeholder:text-slate-400 max-w-[83%]",
            }}
          />

          <div
            onClick={onOpen}
            className="absolute left-4 top-4 w-8 h-8 flex items-center justify-center bg-slate-950 rounded-md cursor-pointer"
          >
            <img src={FiltersIcon} width={20} height={20} />
          </div>

          <AnimatePresence>
            {inputValue && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={buttonVariants}
                className="absolute left-4 bottom-4"
              >
                <Button color="primary" radius="sm" size="lg">
                  شروع جستجو
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <Modal
        backdrop="blur"
        isOpen={isOpen}
        size="lg"
        onOpenChange={onModalClose}
        closeButton={<></>}
        classNames={{
          footer: "",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              {category ? (
                <ModalHeader className="flex items-center justify-between">
                  <span className="text-xl font-bold">فیلترها</span>
                  <div
                    className="flex gap-2 text-gray-700 cursor-pointer mt-1"
                    onClick={() => setCategory("")}
                  >
                    <span className="text-sm">
                      انتخاب دسته‌بندی ({categoryName})
                    </span>
                    <span className="text-xl">←</span>
                  </div>
                </ModalHeader>
              ) : (
                ""
              )}

              <ModalBody className="py-6">
                {category ? (
                  category === "buy" ? (
                    <BuyFilters />
                  ) : (
                    <RentFilters />
                  )
                ) : (
                  <div className="w-full py-4">
                    <div
                      className="flex-1 h-20 bg-slate-100 flex items-center justify-center  hover:bg-gradient-to-r from-red-400 via-pink-600 to-purple-700 text-gray-900 hover:text-white cursor-pointer"
                      onClick={() => setCategory("rent")}
                    >
                      <span className="text-xl font-black">رهن و اجاره</span>
                    </div>
                    <Divider className="bg-slate-200" />
                    <div
                      className="flex-1 h-20 bg-slate-100 flex items-center justify-center  hover:bg-gradient-to-r from-red-400 via-pink-600 to-purple-700 text-gray-900 hover:text-white cursor-pointer"
                      onClick={() => setCategory("buy")}
                    >
                      <span className="text-xl font-black">خرید</span>
                    </div>
                  </div>
                )}
              </ModalBody>

              {category && (
                <ModalFooter>
                  <Button
                    size="lg"
                    radius="sm"
                    color="danger"
                    onPress={onClose}
                    className="flex-1"
                  >
                    انصراف
                  </Button>
                  <Button
                    size="lg"
                    radius="sm"
                    color="primary"
                    onPress={onClose}
                    className="flex-1"
                  >
                    تایید
                  </Button>
                </ModalFooter>
              )}
            </>
          )}
        </ModalContent>
      </Modal>
    </motion.main>
  );
}

export default App;
