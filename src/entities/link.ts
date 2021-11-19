export class GLink {
    source: string;
    target: string;
    feedbacks: Feedback[];
    likes?: number
}

export class Feedback {
    calificacion: number;
}
