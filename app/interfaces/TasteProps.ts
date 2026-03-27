export type SimilarInfo={
    name: string;
    type: string;
}

export type SimilarResult={
    name: string;
}

export type SimilarData={
    info: SimilarInfo[];
    results: SimilarResult[];
}