import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Link,
  Textarea,
} from "@nextui-org/react";

import request from "@/services/request";
import SeeMore from "./components/SeeMore";

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
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSearch = async () => {
    if (isLoading) return;

    try {
      setIsLoading(true);
      const res = await request.post("process", {
        body: { prompt: inputValue },
      });

      console.log({ res });

      setData(res?.data);
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen py-8">
      <motion.div
        transition={{ duration: 0.3 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text flex justify-center items-center pt-48"
      >
        <div>
          <section className="text-center">
            <h1 className="text-5xl font-extrabold leading-snug bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">
              کاوش کن، بجوی، هر کشصری که می‌خوای جستجو کن و خونه مدنظرت رو پیدا
              کن
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
                  "group-data-[has-value=true]:text-slate-700 text-xl font-bold placeholder:text-slate-500 max-w-[83%]",
              }}
            />

            <AnimatePresence>
              {inputValue && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={buttonVariants}
                  className="absolute left-4 bottom-4"
                >
                  <Button
                    color="primary"
                    radius="sm"
                    size="lg"
                    onClick={onSearch}
                    isLoading={isLoading}
                    isDisabled={isLoading}
                  >
                    شروع جستجو
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {data ? (
        <AnimatePresence>
          <motion.div
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            {data?.length ? (
              <>
                <span className="block text-center text-2xl font-bold text-gray-600 mt-12 ">
                  نتایج پیداشده بر اساس دستور شما:
                </span>
                <div className="grid grid-cols-12 gap-6 mt-12">
                  {data?.map((item, index) => (
                    <div key={index} className="col-span-4">
                      <Link isExternal href={item.ad_link}>
                        <Card shadow="md">
                          <CardHeader className="block">
                            <Image
                              alt={item.title}
                              height={200}
                              width={260}
                              radius="sm"
                              className="w-full "
                              classNames={{
                                wrapper: "!max-w-full bg-slate-100",
                              }}
                              src={
                                Object.keys(item?.images)?.length
                                  ? item?.images
                                  : null
                              }
                            />
                            <div className="mt-3">
                              <span className="text-md font-bold">
                                {item.title}
                              </span>
                            </div>
                          </CardHeader>
                          <Divider />
                          <CardBody>
                            <p className="text-right">
                              <SeeMore content={item.ad_description} />
                            </p>
                          </CardBody>
                          <Divider />
                          <CardFooter>
                            {item.extracted_categories &&
                            item.extracted_categories?.length ? (
                              <p className="text-sm font-semibold">
                                {item.extracted_categories?.join(", ")}
                              </p>
                            ) : (
                              ""
                            )}
                          </CardFooter>
                        </Card>
                      </Link>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <span className="block text-center text-xl font-semibold text-gray-500 mt-16">
                متاسفانه نتیجه‌ای پیدا نشد :( لطفا دستور دیگری وارد کنید.
              </span>
            )}
          </motion.div>
        </AnimatePresence>
      ) : (
        ""
      )}
    </main>
  );
}

export default App;
