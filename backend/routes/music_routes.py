from flask import Blueprint, jsonify
from models.music_release import MusicRelease

music_routes = Blueprint('music_routes', __name__)

@music_routes.route('/api/music-releases', methods=['GET'])
def get_music_releases():
    releases = MusicRelease.query.all()
    data = [
        {
            "id": release.id,
            "title": release.title,
            "image": release.image,
            "link": release.link,
        } for release in releases
    ]
    return jsonify(data)