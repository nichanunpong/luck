type SectionTitleProps = {
  id?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
};

export default function SectionTitle({
  id,
  title,
  subtitle,
  align = 'left',
}: SectionTitleProps) {
  const alignmentClass =
    align === 'center'
      ? 'text-center'
      : align === 'right'
      ? 'text-right'
      : 'text-left';

  return (
    <div id={id} className={`space-y-2 ${alignmentClass}`}>
      {subtitle ? (
        <p className='text-xs uppercase tracking-wider text-gray-500'>
          {subtitle}
        </p>
      ) : null}
      <h2 className='text-2xl md:text-3xl font-semibold'>{title}</h2>
    </div>
  );
}
