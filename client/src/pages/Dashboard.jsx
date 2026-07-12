import { useState } from "react";
import AnalysisReport from "../components/AnalysisReport";
import "../styles/home.css";
import api from "../services/api";
import PageHeader from "../components/PageHeader";
import StockSearchInput from "../components/StockSearchInput";
import SubmitButton from "../components/SubmitButton";
import ProcessingSpinner from "../components/ProcessingSpinner";

function Dashboard() {

    const [company, setCompany] = useState("");

    const [selectedSymbol, setSelectedSymbol] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const [loadingMessage, setLoadingMessage] = useState("");

    const [result, setResult] = useState(null);

    const handleAnalyze = async () => {

        if (!company.trim()) {

            alert("Please enter a company name or symbol.");

            return;

        }

        try {

            setIsLoading(true);

            setLoadingMessage("Analyzing company...");

            const response = await api.post("/api/analyze", {

                company,

                symbol: selectedSymbol

            });

            console.log(response.data);

            setResult(response.data);

        }

        catch (error) {

            console.error(error);

            alert(error.response?.data?.message || "Something went wrong.");

        }

        finally {

            setIsLoading(false);

        }

    };

    return (

        <main className="home-container">

            <PageHeader />

            {

                isLoading ?

                    <ProcessingSpinner message={loadingMessage} />

                    :

                    <div className="search-container">

                        <StockSearchInput

                            company={company}

                            setCompany={setCompany}

                            setSelectedSymbol={setSelectedSymbol}

                        />

                        <SubmitButton

                            onAnalyze={handleAnalyze}

                            isLoading={isLoading}

                        />

                    </div>

            }

            {

                result &&

                <AnalysisReport result={result} />

            }

        </main>

    );

}

export default Dashboard;