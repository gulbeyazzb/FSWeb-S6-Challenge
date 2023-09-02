import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  List,
} from "reactstrap";

import axios from "axios";

const Karakter = (props) => {
  const id = props.id;
  const characterUrl = props.characterUrl;

  const [open, setOpen] = useState("");
  const [filmler, SetFilmler] = useState();
  const [itemFilm, SetItemFilm] = useState();

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/films/")
      .then((response) => SetFilmler(response.data.results));
  }, [open]);

  const isThat = (characterUrl) => {
    const itemFilms = filmler.characters.filter((item) => {
      if (item.includes(characterUrl)) {
        return item.title;
      }
    });
    SetItemFilm(itemFilms);
  };
  isThat();
  return (
    <div>
      <Accordion flush open={open} toggle={toggle}>
        <div>
          <AccordionItem className=" accordionfilm">
            <AccordionHeader className="accordion-item" targetId={id}>
              Filmler
            </AccordionHeader>

            <AccordionBody accordionId={id}>
              <List className="details text-start" type="unstyled">
                {itemFilm.map((e) => {
                  return <li>{e.title}</li>;
                })}
              </List>
            </AccordionBody>
          </AccordionItem>
        </div>
      </Accordion>
    </div>
  );
};

export default Karakter;
