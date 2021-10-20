import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackModule } from './track/track.module';

@Module({
    imports: [
        TrackModule,
        MongooseModule.forRoot(
            'mongodb+srv://root:root@cluster0.gglvc.mongodb.net/music-platform?retryWrites=true&w=majority',
        ),
    ],
})
export class AppModule {}
