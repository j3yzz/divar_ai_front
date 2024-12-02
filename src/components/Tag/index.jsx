import { useCheckbox, Chip, VisuallyHidden, tv } from "@nextui-org/react";
// import CheckIcon from "@/assets/check.svg";

const checkbox = tv({
  slots: {
    base: "border-none px-3 py-5 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white",
    content: "text-sm font-semibold",
  },
  variants: {
    isSelected: {
      true: {
        base: "bg-gradient-to-r from-blue-600 to-purple-700 text-white hover:bg-gradient-to-r hover:from-blue-700 hover:to-purple-800",
        content: "text-white pl-2",
      },
    },
    isFocusVisible: {
      true: {
        base: "outline-none ring-2 ring-blue-300 ring-offset-2 ring-offset-transparent",
      },
    },
  },
});

const Tag = (props) => {
  const {
    children,
    isSelected,
    isFocusVisible,
    getBaseProps,
    getLabelProps,
    getInputProps,
  } = useCheckbox({
    ...props,
  });

  const styles = checkbox({ isSelected, isFocusVisible });

  return (
    <label {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <Chip
        classNames={{
          base: styles.base(),
          content: styles.content(),
        }}
        variant="faded"
        {...getLabelProps()}
      >
        {children ? children : isSelected ? "Enabled" : "Disabled"}
      </Chip>
    </label>
  );
};

export default Tag;
