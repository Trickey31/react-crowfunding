import useOnChange from "hooks/useOnChange";
import ReactQuill, { Quill } from "react-quill";
import React, { useMemo } from "react";
import ImageUploader from "quill-image-uploader";
import ImageUpload from "components/image/ImageUpload";
import Gap from "components/common/Gap";
import FormRow from "components/common/FormRow";
import DatePicker from "react-date-picker";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { Label } from "components/label";
import { Input, Textarea } from "components/input";
import { IconFunds } from "components/icons";
import { Field } from "components/field";
import { Dropdown } from "components/dropdown";
import { Button } from "components/button";
import { apiURL, imgbbAPI } from "config/config";
import "react-quill/dist/quill.snow.css";

Quill.register("modules/imageUploader", ImageUploader);

const categoriesData = ["architecture", "education"];

const CampaignAddNew = () => {
  const { control, setValue, handleSubmit, reset, watch } = useForm();
  const [countries, setCountries] = useState([]);
  const [content, setContent] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {
        upload: async (file) => {
          const bodyFormData = new FormData();
          bodyFormData.append("image", file);
          const response = await axios({
            method: "post",
            url: `${imgbbAPI}`,
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
          });
          return response.data.data.url;
        },
      },
    }),
    []
  );
  const [filterCountry, setFilterCountry] = useOnChange();
  useEffect(() => {
    async function fetchCountry() {
      if (!filterCountry) return;
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${filterCountry}`
        );
        setCountries(response.data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchCountry();
  }, [filterCountry]);

  const handleSelectOption = (name, value) => {
    setValue(name, value);
  };
  const getDropDownValue = (name) => {
    const value = watch(name);
    return value;
  };
  const handleAddNew = async (value) => {
    try {
      await axios.post(`${apiURL}/campaigns`, {
        ...value,
        content,
        startDate,
        endDate,
      });
      toast.success("Create campaign successfully!!");
      reset();
    } catch (error) {
      toast.error("Something went wrong!!");
    }
  };
  return (
    <div className="bg-white rounded-[10px] px-[66px] py-10">
      <div className="mb-10 text-center">
        <h1 className="text-[25px] text-neutralText2 font-bold bg-neutralText4 bg-opacity-[0.08] rounded-[10px] px-[60px] py-4 inline-block">
          Create a Campaign 🚀
        </h1>
      </div>
      <form onSubmit={handleSubmit(handleAddNew)}>
        <FormRow>
          <Field>
            <Label htmlFor="title">Campaign Tittle *</Label>
            <Input
              control={control}
              name="title"
              placeholder="Write a title"
            ></Input>
          </Field>
          <Field>
            <Label htmlFor="category">Select a category *</Label>
            <Dropdown>
              <Dropdown.Select
                placeholder={
                  getDropDownValue("category") || "Select a category"
                }
              ></Dropdown.Select>
              <Dropdown.List>
                {categoriesData.length > 0 &&
                  categoriesData.map((category) => (
                    <Dropdown.Option
                      key={category}
                      onClick={() => handleSelectOption("category", category)}
                    >
                      <span className="capitalize">{category}</span>
                    </Dropdown.Option>
                  ))}
              </Dropdown.List>
            </Dropdown>
          </Field>
        </FormRow>
        <FormRow>
          <Field>
            <Label htmlFor="desc">Short Description *</Label>
            <Textarea
              control={control}
              name="desc"
              placeholder="Write a short description...."
            ></Textarea>
          </Field>
          <Field>
            <Label>Featured Image *</Label>
            <ImageUpload
              onChange={setValue}
              name="featured_image"
            ></ImageUpload>
          </Field>
        </FormRow>
        <Field>
          <Label htmlFor="story">Story *</Label>
          <ReactQuill
            modules={modules}
            theme="snow"
            value={content}
            placeholder="Write a story..."
            onChange={setContent}
          />
        </Field>
        <Gap></Gap>
        <div className="flex items-center gap-5 bg-secondary px-11 py-8 rounded-[10px]">
          <IconFunds></IconFunds>
          <h1 className="text-[25px] font-bold text-white">
            You will get 90% of total raised
          </h1>
        </div>
        <Gap></Gap>
        <FormRow>
          <Field>
            <Label htmlFor="goal">Goal *</Label>
            <Input
              control={control}
              name="goal"
              placeholder="$0.00 USD"
            ></Input>
          </Field>
          <Field>
            <Label htmlFor="raised">Raised Amount *</Label>
            <Input
              control={control}
              name="raised"
              placeholder="$0.00 USD"
            ></Input>
          </Field>
        </FormRow>
        <FormRow>
          <Field>
            <Label htmlFor="prefilled">Amount Prefilled</Label>
            <Input
              control={control}
              name="prefilled"
              placeholder="Amount Prefilled"
            ></Input>
            <p className="text-sm text-neutralText3 font-normal max-w-[387px]">
              It will help fill amount box by click, place each amount by comma,
              ex: <strong className="font-medium">10,20,30,40</strong>
            </p>
          </Field>
          <Field>
            <Label htmlFor="video">Video</Label>
            <Input control={control} name="video" placeholder="Video"></Input>
            <p className="text-sm text-neutralText3 font-normal">
              Place Youtube or Vimeo Video URL
            </p>
          </Field>
        </FormRow>
        <FormRow>
          <Field>
            <Label>Campaign End Method</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Select one"></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option>Education</Dropdown.Option>
                <Dropdown.Option>Architecture</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </Field>
          <Field>
            <Label htmlFor="country">Country</Label>
            <Dropdown>
              <Dropdown.Select
                placeholder={getDropDownValue("country") || "Select a country"}
              ></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Search
                  placeholder="Search your country"
                  onChange={setFilterCountry}
                ></Dropdown.Search>
                {countries.length > 0 &&
                  countries.map((country) => (
                    <Dropdown.Option
                      key={country?.name?.common}
                      onClick={() =>
                        handleSelectOption("country", country?.name?.common)
                      }
                    >
                      {country?.name?.common}
                    </Dropdown.Option>
                  ))}
              </Dropdown.List>
            </Dropdown>
          </Field>
        </FormRow>
        <FormRow>
          <Field>
            <Label htmlFor="start">Start Date</Label>
            <DatePicker
              onChange={setStartDate}
              value={startDate}
              format="dd/MM/yyyy"
            />
          </Field>
          <Field>
            <Label htmlFor="end">End Date</Label>
            <DatePicker
              onChange={setEndDate}
              value={endDate}
              format="dd/MM/yyyy"
            />
          </Field>
        </FormRow>
        <div className="text-center mt-5">
          <Button type="submit" className="mx-auto px-10 py-3">
            Create new campaign
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CampaignAddNew;
