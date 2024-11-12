export const FormatNum: React.FC<{ price: number }> = ({ price }) => {
    const numtext = price;
    return <>{numtext.toLocaleString()}</>;
}