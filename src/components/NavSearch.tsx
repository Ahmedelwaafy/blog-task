import { TFunction } from "i18next";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import useDebounce from "../Hooks/useDebounce";
import { cn } from "../utils";

type FormValues = {
  query: string;
};
function NavSearch({
  className,
  lng,
  t,
}: {
  lng: string;
  className?: string;
  t: TFunction;
}) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      query: searchParams.get("q")?.replace(/-/g, " ") || "",
    },
  });
  const query = watch("query");

  const debouncedFilteredText = useDebounce(query);

  useEffect(() => {
    if (debouncedFilteredText && isValid) {
      navigate(`/${lng}?q=${debouncedFilteredText?.replace(/\s/g, "-")}`);
    } else if (!debouncedFilteredText) {
      navigate(`/${lng}`);
    }
  }, [debouncedFilteredText, isValid, lng, navigate]);

  function onSubmit(data: FormValues) {
    if (data.query !== "") {
      navigate(`/${lng}?q=${data.query?.replace(/\s/g, "-")}`);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        "w-[500px] lg:w-[230px] h-full flx flex-col items-start justify-center pt-5",
        className
      )}
    >
      <label className="relative h-10 w-full text-accent " htmlFor="query">
        <button
          type="submit"
          className={`w-5 max-w-[20px] max-h-[20px] pointer-events-auto  absolute top-1/2 -translate-y-1/2 left-2  rtl:left-auto rtl:right-2`}
        >
          <img className="rtl:flip" src="/assets/search.svg" alt="search" />
        </button>
        <input
          className="w-full h-10 bg-background  shadow-secondary focus:shadow-secondary  px-8 !text -accent rounded-full outline-none focus:outline-none trns shadow-[0_0_0_1px] focus:shadow-[0_0_0_2px] border-none focus:border-none  placeholder:opacity-70 placeholder:text-accent "
          type="text"
          placeholder={t("NavSearch.placeholder")}
          {...register(`query`, {
            pattern: /^[a-zA-Z\s]+$/,
          })}
          name="query"
          autoComplete="off"
          id="query"
        />
      </label>
      {errors?.query && (
        <p className="pt-1 text-xs text-secondary ">
          {errors?.query?.type === "pattern" && t(`validations.query.pattern`)}
        </p>
      )}
    </form>
  );
}

export default NavSearch;
