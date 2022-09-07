import { Dropdown } from "components/dropdown";
import { Field } from "components/field";
import { Input, Textarea } from "components/input";
import { Label } from "components/label";
import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageUploader from "quill-image-uploader";
import { useState } from "react";
import Gap from "components/common/Gap";
import { IconFunds } from "components/icons";
import FormRow from "components/common/FormRow";
import { Button } from "components/button";

Quill.register("modules/imageUploader", ImageUploader);

const CampaignAddNew = () => {
  const { control } = useForm();
  const [content, setContent] = useState("");
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
        // upload: async (file) => {
        //   const bodyFormData = new FormData();
        //   bodyFormData.append("image", file);
        //   const response = await axios({
        //     method: "post",
        //     url: "https://api.imgbb.com/1/upload?key=8e700d02733700aa7a7ca4de37b8cfdd",
        //     data: bodyFormData,
        //     headers: { "Content-Type": "multipart/form-data" },
        //   });
        //   return response.data.data.url;
        // },
      },
    }),
    []
  );
  return (
    <div className="bg-white rounded-[10px] px-[66px] py-10">
      <div className="mb-10 text-center">
        <h1 className="text-[25px] text-neutralText2 font-bold bg-neutralText4 bg-opacity-[0.08] rounded-[10px] px-[60px] py-4 inline-block">
          Create a Campaign 🚀
        </h1>
      </div>
      <form>
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
              <Dropdown.Select placeholder="Select a category"></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option>Education</Dropdown.Option>
                <Dropdown.Option>Architecture</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </Field>
        </FormRow>
        <Field>
          <Label htmlFor="desc">Short Description *</Label>
          <Textarea
            control={control}
            name="desc"
            placeholder="Write a short description...."
          ></Textarea>
        </Field>
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
              name="goal"
              placeholder="Amount Prefilled"
            ></Input>
            <p className="text-sm text-neutralText3 font-normal max-w-[387px]">
              It will help fill amount box by click, place each amount by comma,
              ex: <strong className="font-medium">10,20,30,40</strong>
            </p>
          </Field>
          <Field>
            <Label htmlFor="video">Video</Label>
            <Input control={control} name="raised" placeholder="Video"></Input>
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
            <Label>Country</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Select a country"></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option>Viet Nam</Dropdown.Option>
                <Dropdown.Option>USA</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </Field>
        </FormRow>
        <FormRow>
          <Field>
            <Label htmlFor="start">Start Date</Label>
            <Input
              control={control}
              name="start"
              placeholder="Start Date"
            ></Input>
          </Field>
          <Field>
            <Label htmlFor="end">End Date</Label>
            <Input control={control} name="end" placeholder="End Date"></Input>
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
