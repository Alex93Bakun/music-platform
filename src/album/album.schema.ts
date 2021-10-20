import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export type AlbumDocument = Album & Document;

@Schema()
export class Album {
    @Prop()
    name: string;

    @Prop()
    artist: string;

    @Prop()
    track: string;

    @Prop()
    listens: number;

    @Prop()
    picture: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Track' })
    audio: string;
}

export const AlbumSchema = SchemaFactory.createForClass(Album);
