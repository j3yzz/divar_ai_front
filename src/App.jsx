import { useState } from "react";
import { Button, Textarea, CheckboxGroup } from "@nextui-org/react";

import Tag from "@/components/Tag";

function App() {
  const [groupSelected, setGroupSelected] = useState([]);

  return (
    <main className="min-h-screen flex justify-center items-center">
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
            classNames={{
              inputWrapper:
                "bg-gray-100 data-[hover=true]:bg-gray-100 group-data-[focus=true]:bg-gray-100 p-4",
              input:
                "group-data-[has-value=true]:text-slate-500 text-xl font-bold placeholder:text-slate-400",
            }}
          />
          <Button
            className="absolute left-4 bottom-4"
            color="primary"
            radius="sm"
            size="lg"
          >
            شروع جستجو
          </Button>
        </div>

        <div className="flex gap-2">
          <CheckboxGroup
            className="gap-1"
            orientation="horizontal"
            value={groupSelected}
            onChange={setGroupSelected}
          >
            <Tag value="wifi">تگ خونه</Tag>
            <Tag value="tv">تگ آسانسور</Tag>
            <Tag value="kitchen">تگ پارکینگ</Tag>
            <Tag value="parking">تگ تراس</Tag>
          </CheckboxGroup>
          {/* <Chip
            size="lg"
            variant="shadow"
            color="default"
            // classNames={{
            //   base: "bg-gradient-to-br from-indigo-500 to-pink-500  border-white/50 shadow-pink-500/30",
            //   content: "drop-shadow shadow-black text-white",
            // }}
          >
            تگ خونه
          </Chip>
          <Chip
            size="lg"
            variant="shadow"
            classNames={{
              base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-white/50 shadow-pink-500/30",
              content: "drop-shadow shadow-black text-white",
            }}
          >
            تگ آسانسور
          </Chip>
          <Chip
            size="lg"
            variant="shadow"
            classNames={{
              base: "bg-gradient-to-br from-indigo-500 to-pink-500  border-white/50 shadow-pink-500/30",
              content: "drop-shadow shadow-black text-white",
            }}
          >
            تگ پارکینگ
          </Chip> */}
        </div>
      </div>
    </main>
  );
}

export default App;
