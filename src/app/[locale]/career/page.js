import { useTranslations } from "next-intl";

const page = () => {
    const career = useTranslations("service");
    return (
        <div className="min-h-[500px] flex items-center justify-center">
              
             <h2> {career("career")}</h2>
        </div>
    );
};

export default page;