import { Fragment, useEffect, useState } from "react";
import BorderedSection from "../../reusable/containers/BorderedSection";
import InfoIcon from "@mui/icons-material/Info";
import TotalMembersCard from "./cards/TotalMembersCard";
import apiService from "../../../utils/apiService";
import axios from "axios";
import Quote from "./Quote";
import { useIsMount } from "../../../utils/customHooks/useIsMount";
import { Box } from "@mui/material";

export default function Dashboard(props) {
  const [quoteState, setQuoteState] = useState({});
  const isMount = useIsMount();

  useEffect(() => {
    async function fetchQuote() {
      try {
        const response = await axios.get(
          "https://api.api-ninjas.com/v1/quotes?category=fitness",
          {
            headers: {
              "X-Api-Key": "N6rTg0b61UFASAt+Lud3zQ==LlDKNOWs3WpfzOIs",
            },
          }
        );

        setQuoteState(response.data);
      } catch (error) {
        console.error("Error fetching quote:", error);
      }
    }

    if (isMount) {
      fetchQuote();
    }
  }, [isMount]);

  return (
    <Fragment>
      <Box sx={{ padding: "5px" }}>
        <Quote response={quoteState} />
      </Box>
      <div
        style={{
          display: "grid",
          padding: "2em",
          gap: "1em",
          gridTemplateColumns: "repeat(auto-fit, minmax(20vw, 1fr))",
          maxWidth: "70vw",
        }}
      >
        <TotalMembersCard />
        <TotalMembersCard />
        <TotalMembersCard />
        <TotalMembersCard />
        <TotalMembersCard />
        <TotalMembersCard />
      </div>
    </Fragment>
  );
}
