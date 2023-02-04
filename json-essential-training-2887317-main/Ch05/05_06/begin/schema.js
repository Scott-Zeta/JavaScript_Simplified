// Schema for weather data
var weatherSchema = {
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$id": "http://explorecalifornia.com/schemas/weather.json",
    "title": "Root Schema",
    "type": "array",
    "default": [],
    "items": {
        "title": "A Schema",
        "type": "object",
        "default": {},
        "required": [
            "id",
            "name",
            "name_ascii",
            "lat",
            "lng",
            "population",
            "country_id",
            "province",
            "country_name",
            "unit",
            "season",
            "forecast"
        ],
        "properties": {
            "id": {
                "title": "The id Schema",
                "type": "string",
                "default": ""
            },
            "name": {
                "title": "The name Schema",
                "type": "string",
                "default": ""
            },
            "name_ascii": {
                "title": "The name_ascii Schema",
                "type": "string",
                "default": ""
            },
            "lat": {
                "title": "The lat Schema",
                "type": "string",
                "default": ""
            },
            "lng": {
                "title": "The lng Schema",
                "type": "string",
                "default": ""
            },
            "population": {
                "title": "The population Schema",
                "type": "string",
                "default": ""
            },
            "country_id": {
                "title": "The country_id Schema",
                "type": "string",
                "default": ""
            },
            "province": {
                "title": "The province Schema",
                "type": "string",
                "default": ""
            },
            "country_name": {
                "title": "The country_name Schema",
                "type": "string",
                "default": ""
            },
            "unit": {
                "title": "The unit Schema",
                "type": "string",
                "default": ""
            },
            "season": {
                "title": "The season Schema",
                "type": "string",
                "default": ""
            },
            "forecast": {
                "title": "The forecast Schema",
                "type": "array",
                "default": [],
                "items": {
                    "title": "A Schema",
                    "type": "object",
                    "required": [
                        "date",
                        "temp_min",
                        "temp_max",
                        "season_min",
                        "season_max",
                        "condition_name",
                        "condition_desc",
                        "condition_video",
                        "condition_icon"
                    ],
                    "properties": {
                        "date": {
                            "title": "The date Schema",
                            "type": "string"
                        },
                        "temp_min": {
                            "title": "The temp_min Schema",
                            "type": "number"
                        },
                        "temp_max": {
                            "title": "The temp_max Schema",
                            "type": [
                                "number",
                                "integer"
                            ]
                        },
                        "season_min": {
                            "title": "The season_min Schema",
                            "type": "number"
                        },
                        "season_max": {
                            "title": "The season_max Schema",
                            "type": "number"
                        },
                        "condition_name": {
                            "title": "The condition_name Schema",
                            "type": "string"
                        },
                        "condition_desc": {
                            "title": "The condition_desc Schema",
                            "type": "string"
                        },
                        "condition_video": {
                            "title": "The condition_video Schema",
                            "type": "string"
                        },
                        "condition_icon": {
                            "title": "The condition_icon Schema",
                            "type": "string"
                        }
                    }
                }
            }
        }
    }
};
