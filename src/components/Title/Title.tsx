export enum TitleSize {
  SMALL = 'small',
  NORMAL = 'normal',
  BIG = 'big',
  LARGE = 'large',
  EXTRA_LARGE = 'extra-large',
}

export interface ITitle {
  size: TitleSize;
  value: string;
}

export const Title = ({
  size,
  value
}: ITitle) => {

  const getHTagGivingSize = (size: TitleSize) => {
    switch (size) {
      case TitleSize.EXTRA_LARGE:
        return (value: string) => <h1 className="text-5xl font-bold">{value}</h1>
      case TitleSize.LARGE:
        return (value: string) => <h2 className="text-4xl font-bold">{value}</h2>
      case TitleSize.BIG:
        return (value: string) => <h3 className="text-3xl font-bold">{value}</h3>
      case TitleSize.NORMAL:
        return (value: string) => <h4 className="text-2xl font-bold">{value}</h4>
      case TitleSize.SMALL:
        return (value: string) => <h5 className="text-xl font-bold">{value}</h5>
    }
  }

  const generateTitleTag = (size: TitleSize, value: string) => {
    const hTag = getHTagGivingSize(size);
    return hTag(value)
  }

  return (
    generateTitleTag(size, value)
  )
}