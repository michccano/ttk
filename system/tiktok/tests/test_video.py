import argparse
from TikTokAPI import *


def getVideoById(video_id):
    api = TikTokAPI()
    return api.getVideoById(video_id)


def downloadVideoById(video_id):
    api = TikTokAPI()
    api.downloadVideoById(video_id, video_id+".mp4")


def downloadVideoByIdNoWatermark(video_id):
    api = TikTokAPI()
    api.downloadVideoByIdNoWatermark(video_id, video_id+"_no_wm.mp4")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='')
    parser.add_argument('--data', dest='data', type=str, help='data/video/video_no_wm')
    args = parser.parse_args()

    var = "6843481669886954757"
    if args.data == 'data':
        retval = getVideoById(var)
        print(retval)
    elif args.data == 'video':
        downloadVideoById(var)
    elif args.data == 'video_no_wm':
        downloadVideoByIdNoWatermark(var)
    else:
        print("Invalid Argument")
