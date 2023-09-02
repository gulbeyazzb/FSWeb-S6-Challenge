import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  List,
} from "reactstrap";
import Filmler from "./Filmler";

const Karakter = (props) => {
  const characters = props.people;
  const [open, setOpen] = useState("");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Accordion flush open={open} toggle={toggle}>
        {characters.map((character, i) => {
          return (
            <div className="container" key={i}>
              <AccordionItem className=" accordion">
                <AccordionHeader className="accordion-item" targetId={i}>
                  {character.name}
                </AccordionHeader>
                <AccordionBody accordionId={i}>
                  <List className="details text-start" type="unstyled">
                    <li>Gender: {character.gender}</li>
                    <li>Height: {character.height}</li>
                    <li>Mass: {character.mass}</li>
                    <li>BirthYear: {character.birth_year}</li>
                    <li>Eye Color: {character.eye_color}</li>
                    <li>Hair Color: {character.hair_color}</li>
                    <li>Skin Color: {character.skin_color} </li>
                    <Filmler id={i} url={character.url} />
                  </List>
                </AccordionBody>
              </AccordionItem>
            </div>
          );
        })}
      </Accordion>
    </div>
  );
};

export default Karakter;
