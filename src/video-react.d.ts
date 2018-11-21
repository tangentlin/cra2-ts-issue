declare module 'video-react' {
    import * as React from 'react';

    export type Length = number | string | 'auto';

    export interface IPlayerProps {
        fluid?: boolean;
        width?: Length;
        height?: Length;
        src: string;
        poster?: string;
        preload?: 'none' | 'metadata' | 'auto';
        muted?: boolean; // default false
        playsInline?: boolean;
        aspectRatio?: 'auto' | '16:9' | '4:3';
        autoPlay?: boolean;
        startTime?: number;
        loop?: boolean;
    }

    export interface IPlayerState {
        currentSrc: string;
        duration: number;
        currentTime: number;
        seekingTime: number;
        buffered: object;
        waiting: boolean;
        seeking: boolean;
        paused: boolean;
        autoPaused: boolean;
        ended: boolean;
        playbackRate: number;
        muted: boolean;
        volume: number;
        readyState: string;
        networkState: string;
        videoWidth: number;
        videoHeight: number;
        hasStated: boolean;
        userActivity: boolean;
        isActive: boolean;
        isFullscreen: boolean;
        videoId: string;
    }

    export type StateChangeDelegate = (state: IPlayerState, previousState: IPlayerState) => void;

    export class Player extends React.Component<IPlayerProps, {}> {
        public playbackRate: number;
        public muted: boolean;
        public volume: number;
        public videoWidth: number;
        public videoHeight: number;
        public video: any;

        public getState(): IPlayerState;
        public play(): void;
        public pause(): void;
        public load(): void;
        public addTextTrack(): void;
        public canPlayType(): boolean;
        public seek(time: number): void;
        public forward(seconds: number): void;
        public replay(seconds: number): void;
        public toggleFullscreen(): void;
        public subscribeToStateChange(listener: StateChangeDelegate): void;
    }

    export interface IControlBarProps {
        autoHide?: boolean;
        disableCompletely?: boolean;
    }

    export class ControlBar extends React.Component<IControlBarProps, {}> {
    }

    export interface IBigPlayButtonProps {
        position?: string; // hide, left, top, influenced by CSS class names video-react-big-play-button-$position
    }

    export class BigPlayButton extends React.Component<IBigPlayButtonProps, {}> {
    }
}