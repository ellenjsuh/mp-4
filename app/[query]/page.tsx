"use client";
import {useParams, useRouter, useSearchParams} from "next/navigation";
import useSWR from "swr";
import TasteCard from "../components/tasteCard";
import { SimilarResult } from "@/app/interfaces/TasteProps";
import styled from "styled-components";

const PageWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 48px 0;
    font-family: Helvetica, sans-serif;
`;

const Title = styled.h1`
    font-size: 36px;
    font-weight: 300;
    letter-spacing: 4px;
    margin-bottom: 32px;
    color: #344E41;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 32px;
`;

const BackButton = styled.button`
    font-size: 16px;
    background: none;
    border: none;
    cursor: pointer;
    margin-bottom: 32px;
    padding: 0;
    color: #344E41;
    &:hover {
        text-decoration: underline;
    }
`;

export default function QueryPage() {
    const params = useParams();
    const searchParams = useSearchParams();
    const type = searchParams.get("type");
    const router = useRouter();

    const { data, error } = useSWR(
        `/api?q=${params.query}&type=${type}`,
        (url: string) => fetch(url).then((res) => res.json())
    );

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    const results = data?.similar?.results || [];

    return (
        <PageWrapper>
            <BackButton onClick={() => router.push("/")}>← Back</BackButton>
            <Title>{data?.similar?.info[0]?.name}</Title>
            <Grid>
                {results.map((result: SimilarResult, i: number) => (
                    <TasteCard key={i} name={result.name} />
                ))}
            </Grid>
        </PageWrapper>
    );
}