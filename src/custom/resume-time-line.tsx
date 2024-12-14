type Props = {
  title?: string;
  icons?: string;
  items?: string;
};

const ResumeTimeLine = ({ title, icons, items }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      {title}
      {icons}
      {items}
    </div>
  );
};

export default ResumeTimeLine;
