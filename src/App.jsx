import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button, Textarea } from "@nextui-org/react";

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
    </motion.main>
  );
}

export default App;
