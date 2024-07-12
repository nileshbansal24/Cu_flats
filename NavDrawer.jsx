import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import { ArrowDropDown } from "@mui/icons-material";
import { ArrowLeft, Menu, MoveRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openModal } from "../redux/LSstate";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

export default function NavDrawer() {
  const dispatch = useDispatch();
  const [state, setState] = React.useState(false);

  const toggleDrawer = () => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(!state);
  };

  return (
    <div className="block md:hidden">
      <React.Fragment key={"left"}>
        <Button onClick={toggleDrawer()}>
          <Menu size={40} color="purple" />
        </Button>
        <SwipeableDrawer
          anchor={"left"}
          open={state}
          onClose={toggleDrawer()}
          onOpen={toggleDrawer()}
        >
          <div className="w-[70vw] h-[100vh] flex flex-col justify-between px-3">
            <div className="relative">
              <div className="flex items-center justify-between pt-5">
                <img src="/assets/logo.png" className="h-14 " />

                <button
                  onClick={toggleDrawer()}
                  className="rounded-lg border border-black "
                >
                  <X size={25} color="black" />
                </button>
              </div>
              <div className="p-7 mt-3 flex flex-col gap-y-4">
                <Link className="text-xl text-[#24355A] font-semibold" to="">
                  Properties
                </Link>
                <Link className="text-xl text-[#24355A] font-semibold" to="">
                  Properties
                </Link>
                <Accordion
                  sx={{
                    boxShadow: "none",
                    "&.MuiAccordion-root:before": {
                      display: "none",
                    },
                    "& .MuiAccordionSummary-root": {
                      minHeight: "auto",
                      "& .MuiAccordionSummary-content": {
                        margin: 0,
                      },
                      "&.Mui-expanded": {
                        minHeight: "auto", // Ensure minHeight remains the same when expanded
                      },
                    },
                    "& .MuiAccordionDetails-root": {
                      padding: "0 0 0 0",
                    },
                  }}
                >
                  <AccordionSummary
                    sx={{
                      padding: "0 !important",
                      margin: "0 !important",
                      "& .MuiAccordionSummary-content": {
                        margin: "0 !important",
                      },
                      "&.Mui-expanded": {
                        margin: "0 !important",
                        padding: "0 !important",
                      },
                    }}
                    expandIcon={<ArrowDropDown />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <p className="text-xl font-semibold text-[#24355A] ">
                      Categories
                    </p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="pl-5 py-5 flex flex-col gap-y-2">
                      <Link
                        className="text-md border-b font-large flex items-center justify-between"
                        to=""
                      >
                        <div className="text-[#24355A] ">1 BHK</div>
                        <div>
                          <MoveRight size={20} color="black" />
                        </div>
                      </Link>
                      <Link
                        className="text-md border-b font-large flex items-center justify-between"
                        to=""
                      >
                        <div className="text-[#24355A]">2 BHK</div>
                        <div>
                          <MoveRight size={20} color="black" />
                        </div>
                      </Link>
                      <Link
                        className="text-md border-b font-large flex items-center justify-between"
                        to=""
                      >
                        <div className="text-[#24355A]">3 BHK</div>
                        <div>
                          <MoveRight size={20} color="black" />
                        </div>
                      </Link>
                      <Link
                        className="text-md border-b font-large flex items-center justify-between"
                        to=""
                      >
                        <div className="text-[#24355A]">PG</div>
                        <div>
                          <MoveRight size={20} color="black" />
                        </div>
                      </Link>
                      <Link
                        className="text-md border-b font-large flex items-center justify-between"
                        to=""
                      >
                        <div className="text-[#24355A]"> Villas</div>
                        <div>
                          <MoveRight size={20} color="black" />
                        </div>
                      </Link>
                      <Link
                        className="text-md border-b font-large flex items-center justify-between"
                        to=""
                      >
                        <div className="text-[#24355A]">Studio Rooms</div>
                        <div>
                          <MoveRight size={20} color="black" />
                        </div>
                      </Link>
                    </div>
                  </AccordionDetails>
                </Accordion>

                <Link className="text-xl text-[#24355A] font-semibold" to="">
                  About Us
                </Link>
                <Link className="text-xl text-[#24355A] font-semibold" to="">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-y-2 border-t pt-5 border-gray-500 items-center justify-center py-5">
              <button
                onClick={() => dispatch(openModal({ modalName: "LOGIN" }))}
                class="w-full h-12 bg-purple-600  cursor-pointer rounded-xl border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#9748FF] transition duration-300 ease-in-out"
              >
                <span class="font-semibold text-white">Login</span>
              </button>
              <button
                onClick={() => dispatch(openModal({ modalName: "SIGNUP" }))}
                class="w-full h-12 bg-white cursor-pointer rounded-xl border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#9748FF] transition duration-300 ease-in-out"
              >
                <span class="font-semibold text-purple-600 group-hover:text-white">
                  Signup
                </span>
              </button>
            </div>
          </div>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
