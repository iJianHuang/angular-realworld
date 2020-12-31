import { Contactnote } from './contactnote';

export class Contactuser {
    id: number;
    birthDate: Date;
    name: string;
    avatar: string;
    bio: string;

    notes: Contactnote[] = [];
}

