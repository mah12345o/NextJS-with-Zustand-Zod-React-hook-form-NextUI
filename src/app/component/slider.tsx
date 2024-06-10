"use client";
import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Slider() {
  const [open, setOpen] = React.useState(true);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open Lightbox
      </button>

      <Lightbox
        carousel={{ finite: ["1", "2"].length }}
        open={open}
        close={() => setOpen(false)}
        slides={[
          {
            src: "https://logiqproperty.blr1.digitaloceanspaces.com/production/properties/65e572897f9bae79300eafd7/thumbnail/1716442158-rivanta-vibgyor-brochure_page-0010.webp",
            alt: "image 1",
            width: 3840,
            height: 2560,
          },
          {
            src: "https://logiqproperty.blr1.digitaloceanspaces.com/production/properties/65e572897f9bae79300eafd7/images/1716442149-31-01-2023-16751406390.webp",
            alt: "image 1",
            width: 3840,
            height: 2560,
          },
          {
            src: "https://logiqproperty.blr1.digitaloceanspaces.com/production/properties/65e572897f9bae79300eafd7/images/1716442149-31-01-2023-16751406960.webp",
            alt: "image 1",
            width: 3840,
            height: 2560,
          },
        ]}
      />
    </>
  );
}
