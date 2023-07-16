export default function Tag({
        tagKey,
        className,
      }: {
        tagKey: string;
        className: string;
      }) {
        return (
          <div
            className={`${className}`}
          >
            {tagKey}
          </div>
        );
  }