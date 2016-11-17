import mongoose from 'mongoose';

let matchSchema = new mongoose.Schema({
  mapId: {
    type: String,
    required: true
  },
  matchCreation: {
    type: Number,
    required: true
  },
  matchDuration: {
    type: Number,
    required: true
  },
  matchId: {
    type: Number,
    required: true
  },
  matchMode: {
    type: String,
    required: true
  },
  matchType: {
    type: String,
    required: true
  },
  matchVersion: {
    type: String,
    required: true
  },
  participantIdentities: [{
    participantId: {
      type: Number,
      required: true
    },
    player: {
      matchHistoryUri: {
        type: String,
        required: true
      },
      profileIcon: {
        type: Number,
        required: true
      },
      summonerId: {
        type: Number,
        required: true
      },
      summonerName: {
        type: String,
        required: true
      }
    }
  }, {
    participantId: {
      type: Number,
      required: true
    },
    player: {
      matchHistoryUri: {
        type: String,
        required: true
      },
      profileIcon: {
        type: Number,
        required: true
      },
      summonerId: {
        type: Number,
        required: true
      },
      summonerName: {
        type: String,
        required: true
      }
    }
  }, {
    participantId: {
      type: Number,
      required: true
    },
    player: {
      matchHistoryUri: {
        type: String,
        required: true
      },
      profileIcon: {
        type: Number,
        required: true
      },
      summonerId: {
        type: Number,
        required: true
      },
      summonerName: {
        type: String,
        required: true
      }
    }
  }, {
    participantId: {
      type: Number,
      required: true
    },
    player: {
      matchHistoryUri: {
        type: String,
        required: true
      },
      profileIcon: {
        type: Number,
        required: true
      },
      summonerId: {
        type: Number,
        required: true
      },
      summonerName: {
        type: String,
        required: true
      }
    }
  }, {
    participantId: {
      type: Number,
      required: true
    },
    player: {
      matchHistoryUri: {
        type: String,
        required: true
      },
      profileIcon: {
        type: Number,
        required: true
      },
      summonerId: {
        type: Number,
        required: true
      },
      summonerName: {
        type: String,
        required: true
      }
    }
  }, {
    participantId: {
      type: Number,
      required: true
    },
    player: {
      matchHistoryUri: {
        type: String,
        required: true
      },
      profileIcon: {
        type: Number,
        required: true
      },
      summonerId: {
        type: Number,
        required: true
      },
      summonerName: {
        type: String,
        required: true
      }
    }
  }, {
    participantId: {
      type: Number,
      required: true
    },
    player: {
      matchHistoryUri: {
        type: String,
        required: true
      },
      profileIcon: {
        type: Number,
        required: true
      },
      summonerId: {
        type: Number,
        required: true
      },
      summonerName: {
        type: String,
        required: true
      }
    }
  }, {
    participantId: {
      type: Number,
      required: true
    },
    player: {
      matchHistoryUri: {
        type: String,
        required: true
      },
      profileIcon: {
        type: Number,
        required: true
      },
      summonerId: {
        type: Number,
        required: true
      },
      summonerName: {
        type: String,
        required: true
      }
    }
  }, {
    participantId: {
      type: Number,
      required: true
    },
    player: {
      matchHistoryUri: {
        type: String,
        required: true
      },
      profileIcon: {
        type: Number,
        required: true
      },
      summonerId: {
        type: Number,
        required: true
      },
      summonerName: {
        type: String,
        required: true
      }
    }
  }, {
    participantId: {
      type: Number,
      required: true
    },
    player: {
      matchHistoryUri: {
        type: String,
        required: true
      },
      profileIcon: {
        type: Number,
        required: true
      },
      summonerId: {
        type: Number,
        required: true
      },
      summonerName: {
        type: String,
        required: true
      }
    }
  }],
  participants: [{
    championId: {
      type: Number,
      required: true
    },
    highestAchievedSeasonTier: {
      type: String,
      required: true
    },
    masteries: [{
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }],
    participantId: {
      type: Number,
      required: true
    },
    runes: [{
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }, {
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }, {
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }, {
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }],
    spell1Id: {
      type: Number,
      required: true
    },
    spell2Id: {
      type: Number,
      required: true
    },
    stats: {
      assists: {
        type: Number,
        required: true
      },
      champLevel: {
        type: Number,
        required: true
      },
      combatPlayerScore: {
        type: Number,
        required: true
      },
      deaths: {
        type: Number,
        required: true
      },
      doubleKills: {
        type: Number,
        required: true
      },
      firstBloodAssist: {
        type: Boolean,
        required: true
      },
      firstBloodKill: {
        type: Boolean,
        required: true
      },
      firstInhibitorAssist: {
        type: Boolean,
        required: true
      },
      firstInhibitorKill: {
        type: Boolean,
        required: true
      },
      firstTowerAssist: {
        type: Boolean,
        required: true
      },
      firstTowerKill: {
        type: Boolean,
        required: true
      },
      goldEarned: {
        type: Number,
        required: true
      },
      goldSpent: {
        type: Number,
        required: true
      },
      inhibitorKills: {
        type: Number,
        required: true
      },
      item0: {
        type: Number,
        required: true
      },
      item1: {
        type: Number,
        required: true
      },
      item2: {
        type: Number,
        required: true
      },
      item3: {
        type: Number,
        required: true
      },
      item4: {
        type: Number,
        required: true
      },
      item5: {
        type: Number,
        required: true
      },
      item6: {
        type: Number,
        required: true
      },
      killingSprees: {
        type: Number,
        required: true
      },
      kills: {
        type: Number,
        required: true
      },
      largestCriticalStrike: {
        type: Number,
        required: true
      },
      largestKillingSpree: {
        type: Number,
        required: true
      },
      largestMultiKill: {
        type: Number,
        required: true
      },
      magicDamageDealt: {
        type: Number,
        required: true
      },
      magicDamageDealtToChampions: {
        type: Number,
        required: true
      },
      magicDamageTaken: {
        type: Number,
        required: true
      },
      minionsKilled: {
        type: Number,
        required: true
      },
      neutralMinionsKilled: {
        type: Number,
        required: true
      },
      neutralMinionsKilledEnemyJungle: {
        type: Number,
        required: true
      },
      neutralMininosKilledTeamJungle: {
        type: Number,
        requried: true
      },
      objectivePlayerScore: {
        type: Number,
        required: true
      },
      pentaKills: {
        type: Number,
        required: true
      },
      physicalDamageDealt: {
        type: Number,
        required: true
      },
      physicalDamageDealtToChampions: {
        type: Number,
        required: true
      },
      physicalDamageTaken: {
        type: Number,
        required: true
      },
      quadraKills: {
        type: Number,
        required: true
      },
      sightWardsBoughtInGame: {
        type: Number,
        required: true
      },
      totalDamageDealt: {
        type: Number,
        required: true
      },
      totalDamageDealtToChampions: {
        type: Number,
        required: true
      },
      totalDamageTaken: {
        type: Number,
        required: true
      },
      totalHeal: {
        type: Number,
        required: true
      },
      totalPlayerScore: {
        type: Number,
        required: true
      },
      totalScoreRank: {
        type: Number,
        required: true
      },
      totalTimeCrowdControlDealt: {
        type: Number,
        required: true
      },
      totalUnitsHealed: {
        type: Number,
        required: true
      },
      towerKills: {
        type: Number,
        required: true
      },
      tripleKills: {
        type: Number,
        required: true
      },
      trueDamageDealt: {
        type: Number,
        required: true
      },
      trueDamageDealtToChampions: {
        type: Number,
        required: true
      },
      trueDamamgeTaken: {
        type: Number,
        required: true
      },
      unrealKills: {
        type: Number,
        required: true
      },
      visionWardsBoughtInGame: {
        type: Number,
        required: true
      },
      wardsKilled: {
        type: Number,
        required: true
      },
      wardsPlaced: {
        type: Number,
        required: true
      },
      winner: {
        type: Boolean,
        required: true
      }
    },
    teamId: {
      type: Number,
      required: true
    },
    timeline: {
      creepsPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      },
      damageTakenPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      },
      goldPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      },
      lane: {
        type: String,
        required: true
      },
      role: {
        type: String,
        required: true
      },
      xpPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      }
    }
  }, {
    championId: {
      type: Number,
      required: true
    },
    highestAchievedSeasonTier: {
      type: String,
      required: true
    },
    masteries: [{
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }],
    participantId: {
      type: Number,
      required: true
    },
    runes: [{
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }, {
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }, {
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }, {
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }],
    spell1Id: {
      type: Number,
      required: true
    },
    spell2Id: {
      type: Number,
      required: true
    },
    stats: {
      assists: {
        type: Number,
        required: true
      },
      champLevel: {
        type: Number,
        required: true
      },
      combatPlayerScore: {
        type: Number,
        required: true
      },
      deaths: {
        type: Number,
        required: true
      },
      doubleKills: {
        type: Number,
        required: true
      },
      firstBloodAssist: {
        type: Boolean,
        required: true
      },
      firstBloodKill: {
        type: Boolean,
        required: true
      },
      firstInhibitorAssist: {
        type: Boolean,
        required: true
      },
      firstInhibitorKill: {
        type: Boolean,
        required: true
      },
      firstTowerAssist: {
        type: Boolean,
        required: true
      },
      firstTowerKill: {
        type: Boolean,
        required: true
      },
      goldEarned: {
        type: Number,
        required: true
      },
      goldSpent: {
        type: Number,
        required: true
      },
      inhibitorKills: {
        type: Number,
        required: true
      },
      item0: {
        type: Number,
        required: true
      },
      item1: {
        type: Number,
        required: true
      },
      item2: {
        type: Number,
        required: true
      },
      item3: {
        type: Number,
        required: true
      },
      item4: {
        type: Number,
        required: true
      },
      item5: {
        type: Number,
        required: true
      },
      item6: {
        type: Number,
        required: true
      },
      killingSprees: {
        type: Number,
        required: true
      },
      kills: {
        type: Number,
        required: true
      },
      largestCriticalStrike: {
        type: Number,
        required: true
      },
      largestKillingSpree: {
        type: Number,
        required: true
      },
      largestMultiKill: {
        type: Number,
        required: true
      },
      magicDamageDealt: {
        type: Number,
        required: true
      },
      magicDamageDealtToChampions: {
        type: Number,
        required: true
      },
      magicDamageTaken: {
        type: Number,
        required: true
      },
      minionsKilled: {
        type: Number,
        required: true
      },
      neutralMinionsKilled: {
        type: Number,
        required: true
      },
      neutralMinionsKilledEnemyJungle: {
        type: Number,
        required: true
      },
      neutralMininosKilledTeamJungle: {
        type: Number,
        requried: true
      },
      objectivePlayerScore: {
        type: Number,
        required: true
      },
      pentaKills: {
        type: Number,
        required: true
      },
      physicalDamageDealt: {
        type: Number,
        required: true
      },
      physicalDamageDealtToChampions: {
        type: Number,
        required: true
      },
      physicalDamageTaken: {
        type: Number,
        required: true
      },
      quadraKills: {
        type: Number,
        required: true
      },
      sightWardsBoughtInGame: {
        type: Number,
        required: true
      },
      totalDamageDealt: {
        type: Number,
        required: true
      },
      totalDamageDealtToChampions: {
        type: Number,
        required: true
      },
      totalDamageTaken: {
        type: Number,
        required: true
      },
      totalHeal: {
        type: Number,
        required: true
      },
      totalPlayerScore: {
        type: Number,
        required: true
      },
      totalScoreRank: {
        type: Number,
        required: true
      },
      totalTimeCrowdControlDealt: {
        type: Number,
        required: true
      },
      totalUnitsHealed: {
        type: Number,
        required: true
      },
      towerKills: {
        type: Number,
        required: true
      },
      tripleKills: {
        type: Number,
        required: true
      },
      trueDamageDealt: {
        type: Number,
        required: true
      },
      trueDamageDealtToChampions: {
        type: Number,
        required: true
      },
      trueDamamgeTaken: {
        type: Number,
        required: true
      },
      unrealKills: {
        type: Number,
        required: true
      },
      visionWardsBoughtInGame: {
        type: Number,
        required: true
      },
      wardsKilled: {
        type: Number,
        required: true
      },
      wardsPlaced: {
        type: Number,
        required: true
      },
      winner: {
        type: Boolean,
        required: true
      }
    },
    teamId: {
      type: Number,
      required: true
    },
    timeline: {
      creepsPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      },
      damageTakenPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      },
      goldPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      },
      lane: {
        type: String,
        required: true
      },
      role: {
        type: String,
        required: true
      },
      xpPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      }
    }
  }, {
    championId: {
      type: Number,
      required: true
    },
    highestAchievedSeasonTier: {
      type: String,
      required: true
    },
    masteries: [{
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }],
    participantId: {
      type: Number,
      required: true
    },
    runes: [{
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }, {
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }, {
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }, {
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }],
    spell1Id: {
      type: Number,
      required: true
    },
    spell2Id: {
      type: Number,
      required: true
    },
    stats: {
      assists: {
        type: Number,
        required: true
      },
      champLevel: {
        type: Number,
        required: true
      },
      combatPlayerScore: {
        type: Number,
        required: true
      },
      deaths: {
        type: Number,
        required: true
      },
      doubleKills: {
        type: Number,
        required: true
      },
      firstBloodAssist: {
        type: Boolean,
        required: true
      },
      firstBloodKill: {
        type: Boolean,
        required: true
      },
      firstInhibitorAssist: {
        type: Boolean,
        required: true
      },
      firstInhibitorKill: {
        type: Boolean,
        required: true
      },
      firstTowerAssist: {
        type: Boolean,
        required: true
      },
      firstTowerKill: {
        type: Boolean,
        required: true
      },
      goldEarned: {
        type: Number,
        required: true
      },
      goldSpent: {
        type: Number,
        required: true
      },
      inhibitorKills: {
        type: Number,
        required: true
      },
      item0: {
        type: Number,
        required: true
      },
      item1: {
        type: Number,
        required: true
      },
      item2: {
        type: Number,
        required: true
      },
      item3: {
        type: Number,
        required: true
      },
      item4: {
        type: Number,
        required: true
      },
      item5: {
        type: Number,
        required: true
      },
      item6: {
        type: Number,
        required: true
      },
      killingSprees: {
        type: Number,
        required: true
      },
      kills: {
        type: Number,
        required: true
      },
      largestCriticalStrike: {
        type: Number,
        required: true
      },
      largestKillingSpree: {
        type: Number,
        required: true
      },
      largestMultiKill: {
        type: Number,
        required: true
      },
      magicDamageDealt: {
        type: Number,
        required: true
      },
      magicDamageDealtToChampions: {
        type: Number,
        required: true
      },
      magicDamageTaken: {
        type: Number,
        required: true
      },
      minionsKilled: {
        type: Number,
        required: true
      },
      neutralMinionsKilled: {
        type: Number,
        required: true
      },
      neutralMinionsKilledEnemyJungle: {
        type: Number,
        required: true
      },
      neutralMininosKilledTeamJungle: {
        type: Number,
        requried: true
      },
      objectivePlayerScore: {
        type: Number,
        required: true
      },
      pentaKills: {
        type: Number,
        required: true
      },
      physicalDamageDealt: {
        type: Number,
        required: true
      },
      physicalDamageDealtToChampions: {
        type: Number,
        required: true
      },
      physicalDamageTaken: {
        type: Number,
        required: true
      },
      quadraKills: {
        type: Number,
        required: true
      },
      sightWardsBoughtInGame: {
        type: Number,
        required: true
      },
      totalDamageDealt: {
        type: Number,
        required: true
      },
      totalDamageDealtToChampions: {
        type: Number,
        required: true
      },
      totalDamageTaken: {
        type: Number,
        required: true
      },
      totalHeal: {
        type: Number,
        required: true
      },
      totalPlayerScore: {
        type: Number,
        required: true
      },
      totalScoreRank: {
        type: Number,
        required: true
      },
      totalTimeCrowdControlDealt: {
        type: Number,
        required: true
      },
      totalUnitsHealed: {
        type: Number,
        required: true
      },
      towerKills: {
        type: Number,
        required: true
      },
      tripleKills: {
        type: Number,
        required: true
      },
      trueDamageDealt: {
        type: Number,
        required: true
      },
      trueDamageDealtToChampions: {
        type: Number,
        required: true
      },
      trueDamamgeTaken: {
        type: Number,
        required: true
      },
      unrealKills: {
        type: Number,
        required: true
      },
      visionWardsBoughtInGame: {
        type: Number,
        required: true
      },
      wardsKilled: {
        type: Number,
        required: true
      },
      wardsPlaced: {
        type: Number,
        required: true
      },
      winner: {
        type: Boolean,
        required: true
      }
    },
    teamId: {
      type: Number,
      required: true
    },
    timeline: {
      creepsPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      },
      damageTakenPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      },
      goldPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      },
      lane: {
        type: String,
        required: true
      },
      role: {
        type: String,
        required: true
      },
      xpPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      }
    }
  }, {
    championId: {
      type: Number,
      required: true
    },
    highestAchievedSeasonTier: {
      type: String,
      required: true
    },
    masteries: [{
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }],
    participantId: {
      type: Number,
      required: true
    },
    runes: [{
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }, {
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }, {
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }, {
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }],
    spell1Id: {
      type: Number,
      required: true
    },
    spell2Id: {
      type: Number,
      required: true
    },
    stats: {
      assists: {
        type: Number,
        required: true
      },
      champLevel: {
        type: Number,
        required: true
      },
      combatPlayerScore: {
        type: Number,
        required: true
      },
      deaths: {
        type: Number,
        required: true
      },
      doubleKills: {
        type: Number,
        required: true
      },
      firstBloodAssist: {
        type: Boolean,
        required: true
      },
      firstBloodKill: {
        type: Boolean,
        required: true
      },
      firstInhibitorAssist: {
        type: Boolean,
        required: true
      },
      firstInhibitorKill: {
        type: Boolean,
        required: true
      },
      firstTowerAssist: {
        type: Boolean,
        required: true
      },
      firstTowerKill: {
        type: Boolean,
        required: true
      },
      goldEarned: {
        type: Number,
        required: true
      },
      goldSpent: {
        type: Number,
        required: true
      },
      inhibitorKills: {
        type: Number,
        required: true
      },
      item0: {
        type: Number,
        required: true
      },
      item1: {
        type: Number,
        required: true
      },
      item2: {
        type: Number,
        required: true
      },
      item3: {
        type: Number,
        required: true
      },
      item4: {
        type: Number,
        required: true
      },
      item5: {
        type: Number,
        required: true
      },
      item6: {
        type: Number,
        required: true
      },
      killingSprees: {
        type: Number,
        required: true
      },
      kills: {
        type: Number,
        required: true
      },
      largestCriticalStrike: {
        type: Number,
        required: true
      },
      largestKillingSpree: {
        type: Number,
        required: true
      },
      largestMultiKill: {
        type: Number,
        required: true
      },
      magicDamageDealt: {
        type: Number,
        required: true
      },
      magicDamageDealtToChampions: {
        type: Number,
        required: true
      },
      magicDamageTaken: {
        type: Number,
        required: true
      },
      minionsKilled: {
        type: Number,
        required: true
      },
      neutralMinionsKilled: {
        type: Number,
        required: true
      },
      neutralMinionsKilledEnemyJungle: {
        type: Number,
        required: true
      },
      neutralMininosKilledTeamJungle: {
        type: Number,
        requried: true
      },
      objectivePlayerScore: {
        type: Number,
        required: true
      },
      pentaKills: {
        type: Number,
        required: true
      },
      physicalDamageDealt: {
        type: Number,
        required: true
      },
      physicalDamageDealtToChampions: {
        type: Number,
        required: true
      },
      physicalDamageTaken: {
        type: Number,
        required: true
      },
      quadraKills: {
        type: Number,
        required: true
      },
      sightWardsBoughtInGame: {
        type: Number,
        required: true
      },
      totalDamageDealt: {
        type: Number,
        required: true
      },
      totalDamageDealtToChampions: {
        type: Number,
        required: true
      },
      totalDamageTaken: {
        type: Number,
        required: true
      },
      totalHeal: {
        type: Number,
        required: true
      },
      totalPlayerScore: {
        type: Number,
        required: true
      },
      totalScoreRank: {
        type: Number,
        required: true
      },
      totalTimeCrowdControlDealt: {
        type: Number,
        required: true
      },
      totalUnitsHealed: {
        type: Number,
        required: true
      },
      towerKills: {
        type: Number,
        required: true
      },
      tripleKills: {
        type: Number,
        required: true
      },
      trueDamageDealt: {
        type: Number,
        required: true
      },
      trueDamageDealtToChampions: {
        type: Number,
        required: true
      },
      trueDamamgeTaken: {
        type: Number,
        required: true
      },
      unrealKills: {
        type: Number,
        required: true
      },
      visionWardsBoughtInGame: {
        type: Number,
        required: true
      },
      wardsKilled: {
        type: Number,
        required: true
      },
      wardsPlaced: {
        type: Number,
        required: true
      },
      winner: {
        type: Boolean,
        required: true
      }
    },
    teamId: {
      type: Number,
      required: true
    },
    timeline: {
      creepsPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      },
      damageTakenPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      },
      goldPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      },
      lane: {
        type: String,
        required: true
      },
      role: {
        type: String,
        required: true
      },
      xpPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      }
    }
  }, {
    championId: {
      type: Number,
      required: true
    },
    highestAchievedSeasonTier: {
      type: String,
      required: true
    },
    masteries: [{
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }],
    participantId: {
      type: Number,
      required: true
    },
    runes: [{
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }, {
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }, {
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }, {
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }],
    spell1Id: {
      type: Number,
      required: true
    },
    spell2Id: {
      type: Number,
      required: true
    },
    stats: {
      assists: {
        type: Number,
        required: true
      },
      champLevel: {
        type: Number,
        required: true
      },
      combatPlayerScore: {
        type: Number,
        required: true
      },
      deaths: {
        type: Number,
        required: true
      },
      doubleKills: {
        type: Number,
        required: true
      },
      firstBloodAssist: {
        type: Boolean,
        required: true
      },
      firstBloodKill: {
        type: Boolean,
        required: true
      },
      firstInhibitorAssist: {
        type: Boolean,
        required: true
      },
      firstInhibitorKill: {
        type: Boolean,
        required: true
      },
      firstTowerAssist: {
        type: Boolean,
        required: true
      },
      firstTowerKill: {
        type: Boolean,
        required: true
      },
      goldEarned: {
        type: Number,
        required: true
      },
      goldSpent: {
        type: Number,
        required: true
      },
      inhibitorKills: {
        type: Number,
        required: true
      },
      item0: {
        type: Number,
        required: true
      },
      item1: {
        type: Number,
        required: true
      },
      item2: {
        type: Number,
        required: true
      },
      item3: {
        type: Number,
        required: true
      },
      item4: {
        type: Number,
        required: true
      },
      item5: {
        type: Number,
        required: true
      },
      item6: {
        type: Number,
        required: true
      },
      killingSprees: {
        type: Number,
        required: true
      },
      kills: {
        type: Number,
        required: true
      },
      largestCriticalStrike: {
        type: Number,
        required: true
      },
      largestKillingSpree: {
        type: Number,
        required: true
      },
      largestMultiKill: {
        type: Number,
        required: true
      },
      magicDamageDealt: {
        type: Number,
        required: true
      },
      magicDamageDealtToChampions: {
        type: Number,
        required: true
      },
      magicDamageTaken: {
        type: Number,
        required: true
      },
      minionsKilled: {
        type: Number,
        required: true
      },
      neutralMinionsKilled: {
        type: Number,
        required: true
      },
      neutralMinionsKilledEnemyJungle: {
        type: Number,
        required: true
      },
      neutralMininosKilledTeamJungle: {
        type: Number,
        requried: true
      },
      objectivePlayerScore: {
        type: Number,
        required: true
      },
      pentaKills: {
        type: Number,
        required: true
      },
      physicalDamageDealt: {
        type: Number,
        required: true
      },
      physicalDamageDealtToChampions: {
        type: Number,
        required: true
      },
      physicalDamageTaken: {
        type: Number,
        required: true
      },
      quadraKills: {
        type: Number,
        required: true
      },
      sightWardsBoughtInGame: {
        type: Number,
        required: true
      },
      totalDamageDealt: {
        type: Number,
        required: true
      },
      totalDamageDealtToChampions: {
        type: Number,
        required: true
      },
      totalDamageTaken: {
        type: Number,
        required: true
      },
      totalHeal: {
        type: Number,
        required: true
      },
      totalPlayerScore: {
        type: Number,
        required: true
      },
      totalScoreRank: {
        type: Number,
        required: true
      },
      totalTimeCrowdControlDealt: {
        type: Number,
        required: true
      },
      totalUnitsHealed: {
        type: Number,
        required: true
      },
      towerKills: {
        type: Number,
        required: true
      },
      tripleKills: {
        type: Number,
        required: true
      },
      trueDamageDealt: {
        type: Number,
        required: true
      },
      trueDamageDealtToChampions: {
        type: Number,
        required: true
      },
      trueDamamgeTaken: {
        type: Number,
        required: true
      },
      unrealKills: {
        type: Number,
        required: true
      },
      visionWardsBoughtInGame: {
        type: Number,
        required: true
      },
      wardsKilled: {
        type: Number,
        required: true
      },
      wardsPlaced: {
        type: Number,
        required: true
      },
      winner: {
        type: Boolean,
        required: true
      }
    },
    teamId: {
      type: Number,
      required: true
    },
    timeline: {
      creepsPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      },
      damageTakenPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      },
      goldPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      },
      lane: {
        type: String,
        required: true
      },
      role: {
        type: String,
        required: true
      },
      xpPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      }
    }
  }, {
    championId: {
      type: Number,
      required: true
    },
    highestAchievedSeasonTier: {
      type: String,
      required: true
    },
    masteries: [{
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }],
    participantId: {
      type: Number,
      required: true
    },
    runes: [{
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }, {
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }, {
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }, {
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }],
    spell1Id: {
      type: Number,
      required: true
    },
    spell2Id: {
      type: Number,
      required: true
    },
    stats: {
      assists: {
        type: Number,
        required: true
      },
      champLevel: {
        type: Number,
        required: true
      },
      combatPlayerScore: {
        type: Number,
        required: true
      },
      deaths: {
        type: Number,
        required: true
      },
      doubleKills: {
        type: Number,
        required: true
      },
      firstBloodAssist: {
        type: Boolean,
        required: true
      },
      firstBloodKill: {
        type: Boolean,
        required: true
      },
      firstInhibitorAssist: {
        type: Boolean,
        required: true
      },
      firstInhibitorKill: {
        type: Boolean,
        required: true
      },
      firstTowerAssist: {
        type: Boolean,
        required: true
      },
      firstTowerKill: {
        type: Boolean,
        required: true
      },
      goldEarned: {
        type: Number,
        required: true
      },
      goldSpent: {
        type: Number,
        required: true
      },
      inhibitorKills: {
        type: Number,
        required: true
      },
      item0: {
        type: Number,
        required: true
      },
      item1: {
        type: Number,
        required: true
      },
      item2: {
        type: Number,
        required: true
      },
      item3: {
        type: Number,
        required: true
      },
      item4: {
        type: Number,
        required: true
      },
      item5: {
        type: Number,
        required: true
      },
      item6: {
        type: Number,
        required: true
      },
      killingSprees: {
        type: Number,
        required: true
      },
      kills: {
        type: Number,
        required: true
      },
      largestCriticalStrike: {
        type: Number,
        required: true
      },
      largestKillingSpree: {
        type: Number,
        required: true
      },
      largestMultiKill: {
        type: Number,
        required: true
      },
      magicDamageDealt: {
        type: Number,
        required: true
      },
      magicDamageDealtToChampions: {
        type: Number,
        required: true
      },
      magicDamageTaken: {
        type: Number,
        required: true
      },
      minionsKilled: {
        type: Number,
        required: true
      },
      neutralMinionsKilled: {
        type: Number,
        required: true
      },
      neutralMinionsKilledEnemyJungle: {
        type: Number,
        required: true
      },
      neutralMininosKilledTeamJungle: {
        type: Number,
        requried: true
      },
      objectivePlayerScore: {
        type: Number,
        required: true
      },
      pentaKills: {
        type: Number,
        required: true
      },
      physicalDamageDealt: {
        type: Number,
        required: true
      },
      physicalDamageDealtToChampions: {
        type: Number,
        required: true
      },
      physicalDamageTaken: {
        type: Number,
        required: true
      },
      quadraKills: {
        type: Number,
        required: true
      },
      sightWardsBoughtInGame: {
        type: Number,
        required: true
      },
      totalDamageDealt: {
        type: Number,
        required: true
      },
      totalDamageDealtToChampions: {
        type: Number,
        required: true
      },
      totalDamageTaken: {
        type: Number,
        required: true
      },
      totalHeal: {
        type: Number,
        required: true
      },
      totalPlayerScore: {
        type: Number,
        required: true
      },
      totalScoreRank: {
        type: Number,
        required: true
      },
      totalTimeCrowdControlDealt: {
        type: Number,
        required: true
      },
      totalUnitsHealed: {
        type: Number,
        required: true
      },
      towerKills: {
        type: Number,
        required: true
      },
      tripleKills: {
        type: Number,
        required: true
      },
      trueDamageDealt: {
        type: Number,
        required: true
      },
      trueDamageDealtToChampions: {
        type: Number,
        required: true
      },
      trueDamamgeTaken: {
        type: Number,
        required: true
      },
      unrealKills: {
        type: Number,
        required: true
      },
      visionWardsBoughtInGame: {
        type: Number,
        required: true
      },
      wardsKilled: {
        type: Number,
        required: true
      },
      wardsPlaced: {
        type: Number,
        required: true
      },
      winner: {
        type: Boolean,
        required: true
      }
    },
    teamId: {
      type: Number,
      required: true
    },
    timeline: {
      creepsPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      },
      damageTakenPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      },
      goldPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      },
      lane: {
        type: String,
        required: true
      },
      role: {
        type: String,
        required: true
      },
      xpPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      }
    }
  }, {
    championId: {
      type: Number,
      required: true
    },
    highestAchievedSeasonTier: {
      type: String,
      required: true
    },
    masteries: [{
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }],
    participantId: {
      type: Number,
      required: true
    },
    runes: [{
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }, {
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }, {
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }, {
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }],
    spell1Id: {
      type: Number,
      required: true
    },
    spell2Id: {
      type: Number,
      required: true
    },
    stats: {
      assists: {
        type: Number,
        required: true
      },
      champLevel: {
        type: Number,
        required: true
      },
      combatPlayerScore: {
        type: Number,
        required: true
      },
      deaths: {
        type: Number,
        required: true
      },
      doubleKills: {
        type: Number,
        required: true
      },
      firstBloodAssist: {
        type: Boolean,
        required: true
      },
      firstBloodKill: {
        type: Boolean,
        required: true
      },
      firstInhibitorAssist: {
        type: Boolean,
        required: true
      },
      firstInhibitorKill: {
        type: Boolean,
        required: true
      },
      firstTowerAssist: {
        type: Boolean,
        required: true
      },
      firstTowerKill: {
        type: Boolean,
        required: true
      },
      goldEarned: {
        type: Number,
        required: true
      },
      goldSpent: {
        type: Number,
        required: true
      },
      inhibitorKills: {
        type: Number,
        required: true
      },
      item0: {
        type: Number,
        required: true
      },
      item1: {
        type: Number,
        required: true
      },
      item2: {
        type: Number,
        required: true
      },
      item3: {
        type: Number,
        required: true
      },
      item4: {
        type: Number,
        required: true
      },
      item5: {
        type: Number,
        required: true
      },
      item6: {
        type: Number,
        required: true
      },
      killingSprees: {
        type: Number,
        required: true
      },
      kills: {
        type: Number,
        required: true
      },
      largestCriticalStrike: {
        type: Number,
        required: true
      },
      largestKillingSpree: {
        type: Number,
        required: true
      },
      largestMultiKill: {
        type: Number,
        required: true
      },
      magicDamageDealt: {
        type: Number,
        required: true
      },
      magicDamageDealtToChampions: {
        type: Number,
        required: true
      },
      magicDamageTaken: {
        type: Number,
        required: true
      },
      minionsKilled: {
        type: Number,
        required: true
      },
      neutralMinionsKilled: {
        type: Number,
        required: true
      },
      neutralMinionsKilledEnemyJungle: {
        type: Number,
        required: true
      },
      neutralMininosKilledTeamJungle: {
        type: Number,
        requried: true
      },
      objectivePlayerScore: {
        type: Number,
        required: true
      },
      pentaKills: {
        type: Number,
        required: true
      },
      physicalDamageDealt: {
        type: Number,
        required: true
      },
      physicalDamageDealtToChampions: {
        type: Number,
        required: true
      },
      physicalDamageTaken: {
        type: Number,
        required: true
      },
      quadraKills: {
        type: Number,
        required: true
      },
      sightWardsBoughtInGame: {
        type: Number,
        required: true
      },
      totalDamageDealt: {
        type: Number,
        required: true
      },
      totalDamageDealtToChampions: {
        type: Number,
        required: true
      },
      totalDamageTaken: {
        type: Number,
        required: true
      },
      totalHeal: {
        type: Number,
        required: true
      },
      totalPlayerScore: {
        type: Number,
        required: true
      },
      totalScoreRank: {
        type: Number,
        required: true
      },
      totalTimeCrowdControlDealt: {
        type: Number,
        required: true
      },
      totalUnitsHealed: {
        type: Number,
        required: true
      },
      towerKills: {
        type: Number,
        required: true
      },
      tripleKills: {
        type: Number,
        required: true
      },
      trueDamageDealt: {
        type: Number,
        required: true
      },
      trueDamageDealtToChampions: {
        type: Number,
        required: true
      },
      trueDamamgeTaken: {
        type: Number,
        required: true
      },
      unrealKills: {
        type: Number,
        required: true
      },
      visionWardsBoughtInGame: {
        type: Number,
        required: true
      },
      wardsKilled: {
        type: Number,
        required: true
      },
      wardsPlaced: {
        type: Number,
        required: true
      },
      winner: {
        type: Boolean,
        required: true
      }
    },
    teamId: {
      type: Number,
      required: true
    },
    timeline: {
      creepsPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      },
      damageTakenPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      },
      goldPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      },
      lane: {
        type: String,
        required: true
      },
      role: {
        type: String,
        required: true
      },
      xpPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      }
    }
  }, {
    championId: {
      type: Number,
      required: true
    },
    highestAchievedSeasonTier: {
      type: String,
      required: true
    },
    masteries: [{
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }],
    participantId: {
      type: Number,
      required: true
    },
    runes: [{
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }, {
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }, {
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }, {
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }],
    spell1Id: {
      type: Number,
      required: true
    },
    spell2Id: {
      type: Number,
      required: true
    },
    stats: {
      assists: {
        type: Number,
        required: true
      },
      champLevel: {
        type: Number,
        required: true
      },
      combatPlayerScore: {
        type: Number,
        required: true
      },
      deaths: {
        type: Number,
        required: true
      },
      doubleKills: {
        type: Number,
        required: true
      },
      firstBloodAssist: {
        type: Boolean,
        required: true
      },
      firstBloodKill: {
        type: Boolean,
        required: true
      },
      firstInhibitorAssist: {
        type: Boolean,
        required: true
      },
      firstInhibitorKill: {
        type: Boolean,
        required: true
      },
      firstTowerAssist: {
        type: Boolean,
        required: true
      },
      firstTowerKill: {
        type: Boolean,
        required: true
      },
      goldEarned: {
        type: Number,
        required: true
      },
      goldSpent: {
        type: Number,
        required: true
      },
      inhibitorKills: {
        type: Number,
        required: true
      },
      item0: {
        type: Number,
        required: true
      },
      item1: {
        type: Number,
        required: true
      },
      item2: {
        type: Number,
        required: true
      },
      item3: {
        type: Number,
        required: true
      },
      item4: {
        type: Number,
        required: true
      },
      item5: {
        type: Number,
        required: true
      },
      item6: {
        type: Number,
        required: true
      },
      killingSprees: {
        type: Number,
        required: true
      },
      kills: {
        type: Number,
        required: true
      },
      largestCriticalStrike: {
        type: Number,
        required: true
      },
      largestKillingSpree: {
        type: Number,
        required: true
      },
      largestMultiKill: {
        type: Number,
        required: true
      },
      magicDamageDealt: {
        type: Number,
        required: true
      },
      magicDamageDealtToChampions: {
        type: Number,
        required: true
      },
      magicDamageTaken: {
        type: Number,
        required: true
      },
      minionsKilled: {
        type: Number,
        required: true
      },
      neutralMinionsKilled: {
        type: Number,
        required: true
      },
      neutralMinionsKilledEnemyJungle: {
        type: Number,
        required: true
      },
      neutralMininosKilledTeamJungle: {
        type: Number,
        requried: true
      },
      objectivePlayerScore: {
        type: Number,
        required: true
      },
      pentaKills: {
        type: Number,
        required: true
      },
      physicalDamageDealt: {
        type: Number,
        required: true
      },
      physicalDamageDealtToChampions: {
        type: Number,
        required: true
      },
      physicalDamageTaken: {
        type: Number,
        required: true
      },
      quadraKills: {
        type: Number,
        required: true
      },
      sightWardsBoughtInGame: {
        type: Number,
        required: true
      },
      totalDamageDealt: {
        type: Number,
        required: true
      },
      totalDamageDealtToChampions: {
        type: Number,
        required: true
      },
      totalDamageTaken: {
        type: Number,
        required: true
      },
      totalHeal: {
        type: Number,
        required: true
      },
      totalPlayerScore: {
        type: Number,
        required: true
      },
      totalScoreRank: {
        type: Number,
        required: true
      },
      totalTimeCrowdControlDealt: {
        type: Number,
        required: true
      },
      totalUnitsHealed: {
        type: Number,
        required: true
      },
      towerKills: {
        type: Number,
        required: true
      },
      tripleKills: {
        type: Number,
        required: true
      },
      trueDamageDealt: {
        type: Number,
        required: true
      },
      trueDamageDealtToChampions: {
        type: Number,
        required: true
      },
      trueDamamgeTaken: {
        type: Number,
        required: true
      },
      unrealKills: {
        type: Number,
        required: true
      },
      visionWardsBoughtInGame: {
        type: Number,
        required: true
      },
      wardsKilled: {
        type: Number,
        required: true
      },
      wardsPlaced: {
        type: Number,
        required: true
      },
      winner: {
        type: Boolean,
        required: true
      }
    },
    teamId: {
      type: Number,
      required: true
    },
    timeline: {
      creepsPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      },
      damageTakenPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      },
      goldPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      },
      lane: {
        type: String,
        required: true
      },
      role: {
        type: String,
        required: true
      },
      xpPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      }
    }
  }, {
    championId: {
      type: Number,
      required: true
    },
    highestAchievedSeasonTier: {
      type: String,
      required: true
    },
    masteries: [{
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }],
    participantId: {
      type: Number,
      required: true
    },
    runes: [{
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }, {
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }, {
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }, {
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }],
    spell1Id: {
      type: Number,
      required: true
    },
    spell2Id: {
      type: Number,
      required: true
    },
    stats: {
      assists: {
        type: Number,
        required: true
      },
      champLevel: {
        type: Number,
        required: true
      },
      combatPlayerScore: {
        type: Number,
        required: true
      },
      deaths: {
        type: Number,
        required: true
      },
      doubleKills: {
        type: Number,
        required: true
      },
      firstBloodAssist: {
        type: Boolean,
        required: true
      },
      firstBloodKill: {
        type: Boolean,
        required: true
      },
      firstInhibitorAssist: {
        type: Boolean,
        required: true
      },
      firstInhibitorKill: {
        type: Boolean,
        required: true
      },
      firstTowerAssist: {
        type: Boolean,
        required: true
      },
      firstTowerKill: {
        type: Boolean,
        required: true
      },
      goldEarned: {
        type: Number,
        required: true
      },
      goldSpent: {
        type: Number,
        required: true
      },
      inhibitorKills: {
        type: Number,
        required: true
      },
      item0: {
        type: Number,
        required: true
      },
      item1: {
        type: Number,
        required: true
      },
      item2: {
        type: Number,
        required: true
      },
      item3: {
        type: Number,
        required: true
      },
      item4: {
        type: Number,
        required: true
      },
      item5: {
        type: Number,
        required: true
      },
      item6: {
        type: Number,
        required: true
      },
      killingSprees: {
        type: Number,
        required: true
      },
      kills: {
        type: Number,
        required: true
      },
      largestCriticalStrike: {
        type: Number,
        required: true
      },
      largestKillingSpree: {
        type: Number,
        required: true
      },
      largestMultiKill: {
        type: Number,
        required: true
      },
      magicDamageDealt: {
        type: Number,
        required: true
      },
      magicDamageDealtToChampions: {
        type: Number,
        required: true
      },
      magicDamageTaken: {
        type: Number,
        required: true
      },
      minionsKilled: {
        type: Number,
        required: true
      },
      neutralMinionsKilled: {
        type: Number,
        required: true
      },
      neutralMinionsKilledEnemyJungle: {
        type: Number,
        required: true
      },
      neutralMininosKilledTeamJungle: {
        type: Number,
        requried: true
      },
      objectivePlayerScore: {
        type: Number,
        required: true
      },
      pentaKills: {
        type: Number,
        required: true
      },
      physicalDamageDealt: {
        type: Number,
        required: true
      },
      physicalDamageDealtToChampions: {
        type: Number,
        required: true
      },
      physicalDamageTaken: {
        type: Number,
        required: true
      },
      quadraKills: {
        type: Number,
        required: true
      },
      sightWardsBoughtInGame: {
        type: Number,
        required: true
      },
      totalDamageDealt: {
        type: Number,
        required: true
      },
      totalDamageDealtToChampions: {
        type: Number,
        required: true
      },
      totalDamageTaken: {
        type: Number,
        required: true
      },
      totalHeal: {
        type: Number,
        required: true
      },
      totalPlayerScore: {
        type: Number,
        required: true
      },
      totalScoreRank: {
        type: Number,
        required: true
      },
      totalTimeCrowdControlDealt: {
        type: Number,
        required: true
      },
      totalUnitsHealed: {
        type: Number,
        required: true
      },
      towerKills: {
        type: Number,
        required: true
      },
      tripleKills: {
        type: Number,
        required: true
      },
      trueDamageDealt: {
        type: Number,
        required: true
      },
      trueDamageDealtToChampions: {
        type: Number,
        required: true
      },
      trueDamamgeTaken: {
        type: Number,
        required: true
      },
      unrealKills: {
        type: Number,
        required: true
      },
      visionWardsBoughtInGame: {
        type: Number,
        required: true
      },
      wardsKilled: {
        type: Number,
        required: true
      },
      wardsPlaced: {
        type: Number,
        required: true
      },
      winner: {
        type: Boolean,
        required: true
      }
    },
    teamId: {
      type: Number,
      required: true
    },
    timeline: {
      creepsPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      },
      damageTakenPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      },
      goldPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      },
      lane: {
        type: String,
        required: true
      },
      role: {
        type: String,
        required: true
      },
      xpPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      }
    }
  }, {
    championId: {
      type: Number,
      required: true
    },
    highestAchievedSeasonTier: {
      type: String,
      required: true
    },
    masteries: [{
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }, {
      masteryId: {
        type: Number,
        required: true
      },
      rank: {
        type: Number,
        required: true
      }
    }],
    participantId: {
      type: Number,
      required: true
    },
    runes: [{
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }, {
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }, {
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }, {
      rank: {
        type: Number,
        required: true
      },
      runeId: {
        type: Number,
        required: true
      }
    }],
    spell1Id: {
      type: Number,
      required: true
    },
    spell2Id: {
      type: Number,
      required: true
    },
    stats: {
      assists: {
        type: Number,
        required: true
      },
      champLevel: {
        type: Number,
        required: true
      },
      combatPlayerScore: {
        type: Number,
        required: true
      },
      deaths: {
        type: Number,
        required: true
      },
      doubleKills: {
        type: Number,
        required: true
      },
      firstBloodAssist: {
        type: Boolean,
        required: true
      },
      firstBloodKill: {
        type: Boolean,
        required: true
      },
      firstInhibitorAssist: {
        type: Boolean,
        required: true
      },
      firstInhibitorKill: {
        type: Boolean,
        required: true
      },
      firstTowerAssist: {
        type: Boolean,
        required: true
      },
      firstTowerKill: {
        type: Boolean,
        required: true
      },
      goldEarned: {
        type: Number,
        required: true
      },
      goldSpent: {
        type: Number,
        required: true
      },
      inhibitorKills: {
        type: Number,
        required: true
      },
      item0: {
        type: Number,
        required: true
      },
      item1: {
        type: Number,
        required: true
      },
      item2: {
        type: Number,
        required: true
      },
      item3: {
        type: Number,
        required: true
      },
      item4: {
        type: Number,
        required: true
      },
      item5: {
        type: Number,
        required: true
      },
      item6: {
        type: Number,
        required: true
      },
      killingSprees: {
        type: Number,
        required: true
      },
      kills: {
        type: Number,
        required: true
      },
      largestCriticalStrike: {
        type: Number,
        required: true
      },
      largestKillingSpree: {
        type: Number,
        required: true
      },
      largestMultiKill: {
        type: Number,
        required: true
      },
      magicDamageDealt: {
        type: Number,
        required: true
      },
      magicDamageDealtToChampions: {
        type: Number,
        required: true
      },
      magicDamageTaken: {
        type: Number,
        required: true
      },
      minionsKilled: {
        type: Number,
        required: true
      },
      neutralMinionsKilled: {
        type: Number,
        required: true
      },
      neutralMinionsKilledEnemyJungle: {
        type: Number,
        required: true
      },
      neutralMininosKilledTeamJungle: {
        type: Number,
        requried: true
      },
      objectivePlayerScore: {
        type: Number,
        required: true
      },
      pentaKills: {
        type: Number,
        required: true
      },
      physicalDamageDealt: {
        type: Number,
        required: true
      },
      physicalDamageDealtToChampions: {
        type: Number,
        required: true
      },
      physicalDamageTaken: {
        type: Number,
        required: true
      },
      quadraKills: {
        type: Number,
        required: true
      },
      sightWardsBoughtInGame: {
        type: Number,
        required: true
      },
      totalDamageDealt: {
        type: Number,
        required: true
      },
      totalDamageDealtToChampions: {
        type: Number,
        required: true
      },
      totalDamageTaken: {
        type: Number,
        required: true
      },
      totalHeal: {
        type: Number,
        required: true
      },
      totalPlayerScore: {
        type: Number,
        required: true
      },
      totalScoreRank: {
        type: Number,
        required: true
      },
      totalTimeCrowdControlDealt: {
        type: Number,
        required: true
      },
      totalUnitsHealed: {
        type: Number,
        required: true
      },
      towerKills: {
        type: Number,
        required: true
      },
      tripleKills: {
        type: Number,
        required: true
      },
      trueDamageDealt: {
        type: Number,
        required: true
      },
      trueDamageDealtToChampions: {
        type: Number,
        required: true
      },
      trueDamamgeTaken: {
        type: Number,
        required: true
      },
      unrealKills: {
        type: Number,
        required: true
      },
      visionWardsBoughtInGame: {
        type: Number,
        required: true
      },
      wardsKilled: {
        type: Number,
        required: true
      },
      wardsPlaced: {
        type: Number,
        required: true
      },
      winner: {
        type: Boolean,
        required: true
      }
    },
    teamId: {
      type: Number,
      required: true
    },
    timeline: {
      creepsPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      },
      damageTakenPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      },
      goldPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      },
      lane: {
        type: String,
        required: true
      },
      role: {
        type: String,
        required: true
      },
      xpPerMinDeltas: {
        tenToTwenty: {
          type: Number,
          required: true
        },
        thirtyToEnd: {
          type: Number,
          required: true
        },
        twentyToThirty: {
          type: Number,
          required: true
        },
        zeroToTen: {
          type: Number,
          required: true
        }
      }
    }
  }],
  platformId: {
    type: String,
    required: true
  },
  queueType: {
    type: String,
    required: true
  },
  region: {
    type: String,
    required: true
  },
  season: {
    type: String,
    required: true
  },
  teams: [{
    bans: [{
      championId: {
        type: Number,
        required: true
      },
      pickTurn: {
        type: Number,
        required: true
      }
    }, {
      championId: {
        type: Number,
        required: true
      },
      pickTurn: {
        type: Number,
        required: true
      }
    }, {
      championId: {
        type: Number,
        required: true
      },
      pickTurn: {
        type: Number,
        required: true
      }
    }],
    baronKills: {
      type: Number,
      required: true
    },
    dominionVictoryScore: {
      type: Number,
      required: true
    },
    dragonKills: {
      type: Number,
      required: true
    },
    firstBaron: {
      type: Boolean,
      required: true
    },
    firstBlood: {
      type: Boolean,
      required: true
    },
    firstDragon: {
      type: Boolean,
      required: true
    },
    firstInhibitor: {
      type: Boolean,
      required: true
    },
    firstRiftHerald: {
      type: Boolean,
      required: true
    },
    firstTower: {
      type: Boolean,
      required: true
    },
    inhibitorKills: {
      type: Number,
      required: true
    },
    riftHeraldKills: {
      type: Number,
      required: true
    },
    teamId: {
      type: Number,
      required: true
    },
    towerKills: {
      type: Number,
      required: true
    },
    vilemawKills: {
      type: Number,
      required: true
    },
    winner: {
      type: Boolean,
      required: true
    }
  }, {
    bans: [{
      championId: {
        type: Number,
        required: true
      },
      pickTurn: {
        type: Number,
        required: true
      }
    }, {
      championId: {
        type: Number,
        required: true
      },
      pickTurn: {
        type: Number,
        required: true
      }
    }, {
      championId: {
        type: Number,
        required: true
      },
      pickTurn: {
        type: Number,
        required: true
      }
    }],
    baronKills: {
      type: Number,
      required: true
    },
    dominionVictoryScore: {
      type: Number,
      required: true
    },
    dragonKills: {
      type: Number,
      required: true
    },
    firstBaron: {
      type: Boolean,
      required: true
    },
    firstBlood: {
      type: Boolean,
      required: true
    },
    firstDragon: {
      type: Boolean,
      required: true
    },
    firstInhibitor: {
      type: Boolean,
      required: true
    },
    firstRiftHerald: {
      type: Boolean,
      required: true
    },
    firstTower: {
      type: Boolean,
      required: true
    },
    inhibitorKills: {
      type: Number,
      required: true
    },
    riftHeraldKills: {
      type: Number,
      required: true
    },
    teamId: {
      type: Number,
      required: true
    },
    towerKills: {
      type: Number,
      required: true
    },
    vilemawKills: {
      type: Number,
      required: true
    },
    winner: {
      type: Boolean,
      required: true
    }
  }]
});

export default mongoose.model('Matches',matchSchema,'match');
