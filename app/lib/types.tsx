export type Team = {
    "$id": number,
    "name": string,
    "sport_type": string
    "stats": {
        "points_per_game": number,
        "net_passing_yards_per_game": number,
        "rushing_yards_per_game": number
    }
};

export type Player = {
    "$id": number,
    "team_id": number,
    "first_name": string,
    "last_name": string,
    "games_played": number,
    "stats": {
        "yards_per_game": number,
        "touchdowns_per_game": number,
        "attempts_per_game": number,
        "receptions_per_game": number,
        "rushing_touchdowns": number,
        "receiving_touchdowns": number
    }
}

export type Stat = {
    "type": string,
    "value": number
}
export type PlayerStats = {
    "$id": number,
    "player_id": number,
    "game_number": number,
    "stats": Stat[]
}