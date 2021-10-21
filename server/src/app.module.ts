import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackModule } from './track/track.module';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
    imports: [
        TrackModule,
        MongooseModule.forRoot(
            'mongodb+srv://root:root@cluster0.gglvc.mongodb.net/music-platform?retryWrites=true&w=majority',
        ),
        FileModule,
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static'),
        }),
    ],
})
export class AppModule {}
