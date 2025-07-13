import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from app import app 
from models.music_release import db, MusicRelease

music_data = [
    {
        'title': '"WOOF (FEAT. KAH-LO)" MUSIC VIDEO',
        'url': 'https://www.youtube.com/watch?v=bwNDSAuDACc',
    },
    {
        'title': 'LISTEN TO "HEY HOMIE"',
        'url': 'https://sofitukker.lnk.to/heyhomie-single',
    },
    {
        'title': '"HEY HOMIE" VIDEO',
        'url': 'https://www.youtube.com/watch?v=6wYLQmMyhF0',
    },
    {
        'title': 'SAVE ALBUM ON SPOTIFY',
        'url': 'https://open.spotify.com/album/4diOe5MxsDKBVZbqKaoaex',
    },
    {
        'title': 'SAVE ALBUM APPLE MUSIC',
        'url': 'https://music.apple.com/us/album/bread/1741844916',
    },
    {
        'title': 'SAVE ALBUM AMAZON MUSIC',
        'url': 'https://music.amazon.com/albums/B0D21GWDQ9'
    },
        {
        'title': 'VINYL, CD + CASSETTE',
        'url': 'https://sofitukker.lnk.to/bread-physical'
    },
        {
        'title': 'LISTEN TO "THROW SOME ASS"',
        'url': 'https://sofitukker.lnk.to/throwsomeass-single'
    },
    {
        'title': '"THROW SOME ASS" VIDEO',
        'url': 'https://www.youtube.com/watch?v=nRpCivrtmXM'
    },
    {
        'title': 'LISTEN TO "SPIRAL"',
        'url': 'https://sofitukker.lnk.to/spiral-single'
    },
    {
        'title': '"SPIRAL" MUSIC VIDEO',
        'url': 'https://www.youtube.com/watch?v=sc04A4n0qkk'
    },
]

with app.app_context():
    for release in music_data:
        release = MusicRelease(**release)
        db.session.add(release)
    db.session.commit()
    print("✅ Sofi Tukker Music releases seeded successfully!")