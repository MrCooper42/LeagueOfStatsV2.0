import mongoose from 'mongoose';

let statsSchema = new mongoose.Schema({
  playerStatSummaries: [
    {
      playerStatSummaryType: {
        type: String
      },
      aggregatedStats: {
        averageAssists: {
          type: Number
        },
        averageChampionsKilled:{
          type: Number
        },
        averageCombatPlayerScore:{
          type: Number
        },
        averageNodeCapture: {
          type: Number
        },
        averageNodeCaptureAssist: {
          type: Number
        },
        averageNodeNeutralize: {
          type: Number
        },
        averageNodeNeutralizeAssist: {
          type: Number
        },
        averageNumDeaths: {
          type: Number
        },
        averageObjectivePlayerScore: {
          type: Number
        },
        averageTeamObjective: {
          type: Number
        },
        averageTotalPlayerScore: {
          type: Number
        },
        botGamesPlayed: {
          type: Number
        },
        killingSpree: {
          type: Number
        },
        maxAssists: {
          type: Number
        },
        maxChampionsKilled: {
          type: Number
        },
        maxCombatPlayerScore: {
          type: Number
        },
        maxLargestCriticalStrike: {
          type: Number
        },
        maxLargestKillingSpree: {
          type: Number
        },
        maxNodeCapture: {
          type: Number
        },
        maxNodeCaptureAssist: {
          type: Number
        },
        maxNodeNeutralize: {
          type: Number
        },
        maxNodeNeutralizeAssist: {
          type: Number
        },
        maxNumDeaths: {
          type: Number
        },
        maxObjectivePlayerScore: {
          type: Number
        },
        maxTeamObjective: {
          type: Number
        },
        maxTimePlayed: {
          type: Number
        },
        maxTimeSpentLiving: {
          type: Number
        },
        maxTotalPlayerScore: {
          type: Number
        },
        mostChampionKillsPerSession: {
          type: Number
        },
        mostSpellsCast: {
          type: Number
        },
        normalGamesPlayed: {
          type: Number
        },
        rankedPremadeGamesPlayed: {
          type: Number
        },
        rankedSoloGamesPlayed: {
          type: Number
        },
        totalAssists: {
          type: Number
        },
        totalChampionKills: {
          type: Number
        },
        totalDamageDealt: {
          type: Number
        },
        totalDamageTaken: {
          type: Number
        },
        totalDeathsPerSession: {
          type: Number
        },
        totalDoubleKills: {
          type: Number
        },
        totalFirstBlood: {
          type: Number
        },
        totalGoldEarned: {
          type: Number
        },
        totalHeal: {
          type: Number
        },
        totalMagicDamageDealt: {
          type: Number
        },
        totalMinionKills: {
          type: Number
        },
        totalNeutralMinionsKilled: {
          type: Number
        },
        totalNodeCapture: {
          type: Number
        },
        totalNodeNeutralize: {
          type: Number
        },
        totalPentaKills: {
          type: Number
        },
        totalPhysicalDamageDealt: {
          type: Number
        },
        totalQuadraKills: {
          type: Number
        },
        totalSessionsLost: {
          type: Number
        },
        totalSessionsPlayed: {
          type: Number
        },
        totalSessionsWon: {
          type: Number
        },
        totalTripleKills: {
          type: Number
        },
        totalTurretsKilled: {
          type: Number
        },
        totalUnrealKills: {
          type: Number
        }
      },
      losses: {
        type: Number
      },
      modifyDate: {
        type: Number
      },
      wins: {
        type: Number
      }
    },{
      playerStatSummaryType: {
        type: String
      },
      aggregatedStats: {
        averageAssists: {
          type: Number
        },
        averageChampionsKilled:{
          type: Number
        },
        averageCombatPlayerScore:{
          type: Number
        },
        averageNodeCapture: {
          type: Number
        },
        averageNodeCaptureAssist: {
          type: Number
        },
        averageNodeNeutralize: {
          type: Number
        },
        averageNodeNeutralizeAssist: {
          type: Number
        },
        averageNumDeaths: {
          type: Number
        },
        averageObjectivePlayerScore: {
          type: Number
        },
        averageTeamObjective: {
          type: Number
        },
        averageTotalPlayerScore: {
          type: Number
        },
        botGamesPlayed: {
          type: Number
        },
        killingSpree: {
          type: Number
        },
        maxAssists: {
          type: Number
        },
        maxChampionsKilled: {
          type: Number
        },
        maxCombatPlayerScore: {
          type: Number
        },
        maxLargestCriticalStrike: {
          type: Number
        },
        maxLargestKillingSpree: {
          type: Number
        },
        maxNodeCapture: {
          type: Number
        },
        maxNodeCaptureAssist: {
          type: Number
        },
        maxNodeNeutralize: {
          type: Number
        },
        maxNodeNeutralizeAssist: {
          type: Number
        },
        maxNumDeaths: {
          type: Number
        },
        maxObjectivePlayerScore: {
          type: Number
        },
        maxTeamObjective: {
          type: Number
        },
        maxTimePlayed: {
          type: Number
        },
        maxTimeSpentLiving: {
          type: Number
        },
        maxTotalPlayerScore: {
          type: Number
        },
        mostChampionKillsPerSession: {
          type: Number
        },
        mostSpellsCast: {
          type: Number
        },
        normalGamesPlayed: {
          type: Number
        },
        rankedPremadeGamesPlayed: {
          type: Number
        },
        rankedSoloGamesPlayed: {
          type: Number
        },
        totalAssists: {
          type: Number
        },
        totalChampionKills: {
          type: Number
        },
        totalDamageDealt: {
          type: Number
        },
        totalDamageTaken: {
          type: Number
        },
        totalDeathsPerSession: {
          type: Number
        },
        totalDoubleKills: {
          type: Number
        },
        totalFirstBlood: {
          type: Number
        },
        totalGoldEarned: {
          type: Number
        },
        totalHeal: {
          type: Number
        },
        totalMagicDamageDealt: {
          type: Number
        },
        totalMinionKills: {
          type: Number
        },
        totalNeutralMinionsKilled: {
          type: Number
        },
        totalNodeCapture: {
          type: Number
        },
        totalNodeNeutralize: {
          type: Number
        },
        totalPentaKills: {
          type: Number
        },
        totalPhysicalDamageDealt: {
          type: Number
        },
        totalQuadraKills: {
          type: Number
        },
        totalSessionsLost: {
          type: Number
        },
        totalSessionsPlayed: {
          type: Number
        },
        totalSessionsWon: {
          type: Number
        },
        totalTripleKills: {
          type: Number
        },
        totalTurretsKilled: {
          type: Number
        },
        totalUnrealKills: {
          type: Number
        }
      },
      losses: {
        type: Number
      },
      modifyDate: {
        type: Number
      },
      wins: {
        type: Number
      }
    },{
      playerStatSummaryType: {
        type: String
      },
      aggregatedStats: {
        averageAssists: {
          type: Number
        },
        averageChampionsKilled:{
          type: Number
        },
        averageCombatPlayerScore:{
          type: Number
        },
        averageNodeCapture: {
          type: Number
        },
        averageNodeCaptureAssist: {
          type: Number
        },
        averageNodeNeutralize: {
          type: Number
        },
        averageNodeNeutralizeAssist: {
          type: Number
        },
        averageNumDeaths: {
          type: Number
        },
        averageObjectivePlayerScore: {
          type: Number
        },
        averageTeamObjective: {
          type: Number
        },
        averageTotalPlayerScore: {
          type: Number
        },
        botGamesPlayed: {
          type: Number
        },
        killingSpree: {
          type: Number
        },
        maxAssists: {
          type: Number
        },
        maxChampionsKilled: {
          type: Number
        },
        maxCombatPlayerScore: {
          type: Number
        },
        maxLargestCriticalStrike: {
          type: Number
        },
        maxLargestKillingSpree: {
          type: Number
        },
        maxNodeCapture: {
          type: Number
        },
        maxNodeCaptureAssist: {
          type: Number
        },
        maxNodeNeutralize: {
          type: Number
        },
        maxNodeNeutralizeAssist: {
          type: Number
        },
        maxNumDeaths: {
          type: Number
        },
        maxObjectivePlayerScore: {
          type: Number
        },
        maxTeamObjective: {
          type: Number
        },
        maxTimePlayed: {
          type: Number
        },
        maxTimeSpentLiving: {
          type: Number
        },
        maxTotalPlayerScore: {
          type: Number
        },
        mostChampionKillsPerSession: {
          type: Number
        },
        mostSpellsCast: {
          type: Number
        },
        normalGamesPlayed: {
          type: Number
        },
        rankedPremadeGamesPlayed: {
          type: Number
        },
        rankedSoloGamesPlayed: {
          type: Number
        },
        totalAssists: {
          type: Number
        },
        totalChampionKills: {
          type: Number
        },
        totalDamageDealt: {
          type: Number
        },
        totalDamageTaken: {
          type: Number
        },
        totalDeathsPerSession: {
          type: Number
        },
        totalDoubleKills: {
          type: Number
        },
        totalFirstBlood: {
          type: Number
        },
        totalGoldEarned: {
          type: Number
        },
        totalHeal: {
          type: Number
        },
        totalMagicDamageDealt: {
          type: Number
        },
        totalMinionKills: {
          type: Number
        },
        totalNeutralMinionsKilled: {
          type: Number
        },
        totalNodeCapture: {
          type: Number
        },
        totalNodeNeutralize: {
          type: Number
        },
        totalPentaKills: {
          type: Number
        },
        totalPhysicalDamageDealt: {
          type: Number
        },
        totalQuadraKills: {
          type: Number
        },
        totalSessionsLost: {
          type: Number
        },
        totalSessionsPlayed: {
          type: Number
        },
        totalSessionsWon: {
          type: Number
        },
        totalTripleKills: {
          type: Number
        },
        totalTurretsKilled: {
          type: Number
        },
        totalUnrealKills: {
          type: Number
        }
      },
      losses: {
        type: Number
      },
      modifyDate: {
        type: Number
      },
      wins: {
        type: Number
      }
    },{
      playerStatSummaryType: {
        type: String
      },
      aggregatedStats: {
        averageAssists: {
          type: Number
        },
        averageChampionsKilled:{
          type: Number
        },
        averageCombatPlayerScore:{
          type: Number
        },
        averageNodeCapture: {
          type: Number
        },
        averageNodeCaptureAssist: {
          type: Number
        },
        averageNodeNeutralize: {
          type: Number
        },
        averageNodeNeutralizeAssist: {
          type: Number
        },
        averageNumDeaths: {
          type: Number
        },
        averageObjectivePlayerScore: {
          type: Number
        },
        averageTeamObjective: {
          type: Number
        },
        averageTotalPlayerScore: {
          type: Number
        },
        botGamesPlayed: {
          type: Number
        },
        killingSpree: {
          type: Number
        },
        maxAssists: {
          type: Number
        },
        maxChampionsKilled: {
          type: Number
        },
        maxCombatPlayerScore: {
          type: Number
        },
        maxLargestCriticalStrike: {
          type: Number
        },
        maxLargestKillingSpree: {
          type: Number
        },
        maxNodeCapture: {
          type: Number
        },
        maxNodeCaptureAssist: {
          type: Number
        },
        maxNodeNeutralize: {
          type: Number
        },
        maxNodeNeutralizeAssist: {
          type: Number
        },
        maxNumDeaths: {
          type: Number
        },
        maxObjectivePlayerScore: {
          type: Number
        },
        maxTeamObjective: {
          type: Number
        },
        maxTimePlayed: {
          type: Number
        },
        maxTimeSpentLiving: {
          type: Number
        },
        maxTotalPlayerScore: {
          type: Number
        },
        mostChampionKillsPerSession: {
          type: Number
        },
        mostSpellsCast: {
          type: Number
        },
        normalGamesPlayed: {
          type: Number
        },
        rankedPremadeGamesPlayed: {
          type: Number
        },
        rankedSoloGamesPlayed: {
          type: Number
        },
        totalAssists: {
          type: Number
        },
        totalChampionKills: {
          type: Number
        },
        totalDamageDealt: {
          type: Number
        },
        totalDamageTaken: {
          type: Number
        },
        totalDeathsPerSession: {
          type: Number
        },
        totalDoubleKills: {
          type: Number
        },
        totalFirstBlood: {
          type: Number
        },
        totalGoldEarned: {
          type: Number
        },
        totalHeal: {
          type: Number
        },
        totalMagicDamageDealt: {
          type: Number
        },
        totalMinionKills: {
          type: Number
        },
        totalNeutralMinionsKilled: {
          type: Number
        },
        totalNodeCapture: {
          type: Number
        },
        totalNodeNeutralize: {
          type: Number
        },
        totalPentaKills: {
          type: Number
        },
        totalPhysicalDamageDealt: {
          type: Number
        },
        totalQuadraKills: {
          type: Number
        },
        totalSessionsLost: {
          type: Number
        },
        totalSessionsPlayed: {
          type: Number
        },
        totalSessionsWon: {
          type: Number
        },
        totalTripleKills: {
          type: Number
        },
        totalTurretsKilled: {
          type: Number
        },
        totalUnrealKills: {
          type: Number
        }
      },
      losses: {
        type: Number
      },
      modifyDate: {
        type: Number
      },
      wins: {
        type: Number
      }
    },{
      playerStatSummaryType: {
        type: String
      },
      aggregatedStats: {
        averageAssists: {
          type: Number
        },
        averageChampionsKilled:{
          type: Number
        },
        averageCombatPlayerScore:{
          type: Number
        },
        averageNodeCapture: {
          type: Number
        },
        averageNodeCaptureAssist: {
          type: Number
        },
        averageNodeNeutralize: {
          type: Number
        },
        averageNodeNeutralizeAssist: {
          type: Number
        },
        averageNumDeaths: {
          type: Number
        },
        averageObjectivePlayerScore: {
          type: Number
        },
        averageTeamObjective: {
          type: Number
        },
        averageTotalPlayerScore: {
          type: Number
        },
        botGamesPlayed: {
          type: Number
        },
        killingSpree: {
          type: Number
        },
        maxAssists: {
          type: Number
        },
        maxChampionsKilled: {
          type: Number
        },
        maxCombatPlayerScore: {
          type: Number
        },
        maxLargestCriticalStrike: {
          type: Number
        },
        maxLargestKillingSpree: {
          type: Number
        },
        maxNodeCapture: {
          type: Number
        },
        maxNodeCaptureAssist: {
          type: Number
        },
        maxNodeNeutralize: {
          type: Number
        },
        maxNodeNeutralizeAssist: {
          type: Number
        },
        maxNumDeaths: {
          type: Number
        },
        maxObjectivePlayerScore: {
          type: Number
        },
        maxTeamObjective: {
          type: Number
        },
        maxTimePlayed: {
          type: Number
        },
        maxTimeSpentLiving: {
          type: Number
        },
        maxTotalPlayerScore: {
          type: Number
        },
        mostChampionKillsPerSession: {
          type: Number
        },
        mostSpellsCast: {
          type: Number
        },
        normalGamesPlayed: {
          type: Number
        },
        rankedPremadeGamesPlayed: {
          type: Number
        },
        rankedSoloGamesPlayed: {
          type: Number
        },
        totalAssists: {
          type: Number
        },
        totalChampionKills: {
          type: Number
        },
        totalDamageDealt: {
          type: Number
        },
        totalDamageTaken: {
          type: Number
        },
        totalDeathsPerSession: {
          type: Number
        },
        totalDoubleKills: {
          type: Number
        },
        totalFirstBlood: {
          type: Number
        },
        totalGoldEarned: {
          type: Number
        },
        totalHeal: {
          type: Number
        },
        totalMagicDamageDealt: {
          type: Number
        },
        totalMinionKills: {
          type: Number
        },
        totalNeutralMinionsKilled: {
          type: Number
        },
        totalNodeCapture: {
          type: Number
        },
        totalNodeNeutralize: {
          type: Number
        },
        totalPentaKills: {
          type: Number
        },
        totalPhysicalDamageDealt: {
          type: Number
        },
        totalQuadraKills: {
          type: Number
        },
        totalSessionsLost: {
          type: Number
        },
        totalSessionsPlayed: {
          type: Number
        },
        totalSessionsWon: {
          type: Number
        },
        totalTripleKills: {
          type: Number
        },
        totalTurretsKilled: {
          type: Number
        },
        totalUnrealKills: {
          type: Number
        }
      },
      losses: {
        type: Number
      },
      modifyDate: {
        type: Number
      },
      wins: {
        type: Number
      }
    },{
      playerStatSummaryType: {
        type: String
      },
      aggregatedStats: {
        averageAssists: {
          type: Number
        },
        averageChampionsKilled:{
          type: Number
        },
        averageCombatPlayerScore:{
          type: Number
        },
        averageNodeCapture: {
          type: Number
        },
        averageNodeCaptureAssist: {
          type: Number
        },
        averageNodeNeutralize: {
          type: Number
        },
        averageNodeNeutralizeAssist: {
          type: Number
        },
        averageNumDeaths: {
          type: Number
        },
        averageObjectivePlayerScore: {
          type: Number
        },
        averageTeamObjective: {
          type: Number
        },
        averageTotalPlayerScore: {
          type: Number
        },
        botGamesPlayed: {
          type: Number
        },
        killingSpree: {
          type: Number
        },
        maxAssists: {
          type: Number
        },
        maxChampionsKilled: {
          type: Number
        },
        maxCombatPlayerScore: {
          type: Number
        },
        maxLargestCriticalStrike: {
          type: Number
        },
        maxLargestKillingSpree: {
          type: Number
        },
        maxNodeCapture: {
          type: Number
        },
        maxNodeCaptureAssist: {
          type: Number
        },
        maxNodeNeutralize: {
          type: Number
        },
        maxNodeNeutralizeAssist: {
          type: Number
        },
        maxNumDeaths: {
          type: Number
        },
        maxObjectivePlayerScore: {
          type: Number
        },
        maxTeamObjective: {
          type: Number
        },
        maxTimePlayed: {
          type: Number
        },
        maxTimeSpentLiving: {
          type: Number
        },
        maxTotalPlayerScore: {
          type: Number
        },
        mostChampionKillsPerSession: {
          type: Number
        },
        mostSpellsCast: {
          type: Number
        },
        normalGamesPlayed: {
          type: Number
        },
        rankedPremadeGamesPlayed: {
          type: Number
        },
        rankedSoloGamesPlayed: {
          type: Number
        },
        totalAssists: {
          type: Number
        },
        totalChampionKills: {
          type: Number
        },
        totalDamageDealt: {
          type: Number
        },
        totalDamageTaken: {
          type: Number
        },
        totalDeathsPerSession: {
          type: Number
        },
        totalDoubleKills: {
          type: Number
        },
        totalFirstBlood: {
          type: Number
        },
        totalGoldEarned: {
          type: Number
        },
        totalHeal: {
          type: Number
        },
        totalMagicDamageDealt: {
          type: Number
        },
        totalMinionKills: {
          type: Number
        },
        totalNeutralMinionsKilled: {
          type: Number
        },
        totalNodeCapture: {
          type: Number
        },
        totalNodeNeutralize: {
          type: Number
        },
        totalPentaKills: {
          type: Number
        },
        totalPhysicalDamageDealt: {
          type: Number
        },
        totalQuadraKills: {
          type: Number
        },
        totalSessionsLost: {
          type: Number
        },
        totalSessionsPlayed: {
          type: Number
        },
        totalSessionsWon: {
          type: Number
        },
        totalTripleKills: {
          type: Number
        },
        totalTurretsKilled: {
          type: Number
        },
        totalUnrealKills: {
          type: Number
        }
      },
      losses: {
        type: Number
      },
      modifyDate: {
        type: Number
      },
      wins: {
        type: Number
      }
    },{
      playerStatSummaryType: {
        type: String
      },
      aggregatedStats: {
        averageAssists: {
          type: Number
        },
        averageChampionsKilled:{
          type: Number
        },
        averageCombatPlayerScore:{
          type: Number
        },
        averageNodeCapture: {
          type: Number
        },
        averageNodeCaptureAssist: {
          type: Number
        },
        averageNodeNeutralize: {
          type: Number
        },
        averageNodeNeutralizeAssist: {
          type: Number
        },
        averageNumDeaths: {
          type: Number
        },
        averageObjectivePlayerScore: {
          type: Number
        },
        averageTeamObjective: {
          type: Number
        },
        averageTotalPlayerScore: {
          type: Number
        },
        botGamesPlayed: {
          type: Number
        },
        killingSpree: {
          type: Number
        },
        maxAssists: {
          type: Number
        },
        maxChampionsKilled: {
          type: Number
        },
        maxCombatPlayerScore: {
          type: Number
        },
        maxLargestCriticalStrike: {
          type: Number
        },
        maxLargestKillingSpree: {
          type: Number
        },
        maxNodeCapture: {
          type: Number
        },
        maxNodeCaptureAssist: {
          type: Number
        },
        maxNodeNeutralize: {
          type: Number
        },
        maxNodeNeutralizeAssist: {
          type: Number
        },
        maxNumDeaths: {
          type: Number
        },
        maxObjectivePlayerScore: {
          type: Number
        },
        maxTeamObjective: {
          type: Number
        },
        maxTimePlayed: {
          type: Number
        },
        maxTimeSpentLiving: {
          type: Number
        },
        maxTotalPlayerScore: {
          type: Number
        },
        mostChampionKillsPerSession: {
          type: Number
        },
        mostSpellsCast: {
          type: Number
        },
        normalGamesPlayed: {
          type: Number
        },
        rankedPremadeGamesPlayed: {
          type: Number
        },
        rankedSoloGamesPlayed: {
          type: Number
        },
        totalAssists: {
          type: Number
        },
        totalChampionKills: {
          type: Number
        },
        totalDamageDealt: {
          type: Number
        },
        totalDamageTaken: {
          type: Number
        },
        totalDeathsPerSession: {
          type: Number
        },
        totalDoubleKills: {
          type: Number
        },
        totalFirstBlood: {
          type: Number
        },
        totalGoldEarned: {
          type: Number
        },
        totalHeal: {
          type: Number
        },
        totalMagicDamageDealt: {
          type: Number
        },
        totalMinionKills: {
          type: Number
        },
        totalNeutralMinionsKilled: {
          type: Number
        },
        totalNodeCapture: {
          type: Number
        },
        totalNodeNeutralize: {
          type: Number
        },
        totalPentaKills: {
          type: Number
        },
        totalPhysicalDamageDealt: {
          type: Number
        },
        totalQuadraKills: {
          type: Number
        },
        totalSessionsLost: {
          type: Number
        },
        totalSessionsPlayed: {
          type: Number
        },
        totalSessionsWon: {
          type: Number
        },
        totalTripleKills: {
          type: Number
        },
        totalTurretsKilled: {
          type: Number
        },
        totalUnrealKills: {
          type: Number
        }
      },
      losses: {
        type: Number
      },
      modifyDate: {
        type: Number
      },
      wins: {
        type: Number
      }
    },{
      playerStatSummaryType: {
        type: String
      },
      aggregatedStats: {
        averageAssists: {
          type: Number
        },
        averageChampionsKilled:{
          type: Number
        },
        averageCombatPlayerScore:{
          type: Number
        },
        averageNodeCapture: {
          type: Number
        },
        averageNodeCaptureAssist: {
          type: Number
        },
        averageNodeNeutralize: {
          type: Number
        },
        averageNodeNeutralizeAssist: {
          type: Number
        },
        averageNumDeaths: {
          type: Number
        },
        averageObjectivePlayerScore: {
          type: Number
        },
        averageTeamObjective: {
          type: Number
        },
        averageTotalPlayerScore: {
          type: Number
        },
        botGamesPlayed: {
          type: Number
        },
        killingSpree: {
          type: Number
        },
        maxAssists: {
          type: Number
        },
        maxChampionsKilled: {
          type: Number
        },
        maxCombatPlayerScore: {
          type: Number
        },
        maxLargestCriticalStrike: {
          type: Number
        },
        maxLargestKillingSpree: {
          type: Number
        },
        maxNodeCapture: {
          type: Number
        },
        maxNodeCaptureAssist: {
          type: Number
        },
        maxNodeNeutralize: {
          type: Number
        },
        maxNodeNeutralizeAssist: {
          type: Number
        },
        maxNumDeaths: {
          type: Number
        },
        maxObjectivePlayerScore: {
          type: Number
        },
        maxTeamObjective: {
          type: Number
        },
        maxTimePlayed: {
          type: Number
        },
        maxTimeSpentLiving: {
          type: Number
        },
        maxTotalPlayerScore: {
          type: Number
        },
        mostChampionKillsPerSession: {
          type: Number
        },
        mostSpellsCast: {
          type: Number
        },
        normalGamesPlayed: {
          type: Number
        },
        rankedPremadeGamesPlayed: {
          type: Number
        },
        rankedSoloGamesPlayed: {
          type: Number
        },
        totalAssists: {
          type: Number
        },
        totalChampionKills: {
          type: Number
        },
        totalDamageDealt: {
          type: Number
        },
        totalDamageTaken: {
          type: Number
        },
        totalDeathsPerSession: {
          type: Number
        },
        totalDoubleKills: {
          type: Number
        },
        totalFirstBlood: {
          type: Number
        },
        totalGoldEarned: {
          type: Number
        },
        totalHeal: {
          type: Number
        },
        totalMagicDamageDealt: {
          type: Number
        },
        totalMinionKills: {
          type: Number
        },
        totalNeutralMinionsKilled: {
          type: Number
        },
        totalNodeCapture: {
          type: Number
        },
        totalNodeNeutralize: {
          type: Number
        },
        totalPentaKills: {
          type: Number
        },
        totalPhysicalDamageDealt: {
          type: Number
        },
        totalQuadraKills: {
          type: Number
        },
        totalSessionsLost: {
          type: Number
        },
        totalSessionsPlayed: {
          type: Number
        },
        totalSessionsWon: {
          type: Number
        },
        totalTripleKills: {
          type: Number
        },
        totalTurretsKilled: {
          type: Number
        },
        totalUnrealKills: {
          type: Number
        }
      },
      losses: {
        type: Number
      },
      modifyDate: {
        type: Number
      },
      wins: {
        type: Number
      }
    },{
      playerStatSummaryType: {
        type: String
      },
      aggregatedStats: {
        averageAssists: {
          type: Number
        },
        averageChampionsKilled:{
          type: Number
        },
        averageCombatPlayerScore:{
          type: Number
        },
        averageNodeCapture: {
          type: Number
        },
        averageNodeCaptureAssist: {
          type: Number
        },
        averageNodeNeutralize: {
          type: Number
        },
        averageNodeNeutralizeAssist: {
          type: Number
        },
        averageNumDeaths: {
          type: Number
        },
        averageObjectivePlayerScore: {
          type: Number
        },
        averageTeamObjective: {
          type: Number
        },
        averageTotalPlayerScore: {
          type: Number
        },
        botGamesPlayed: {
          type: Number
        },
        killingSpree: {
          type: Number
        },
        maxAssists: {
          type: Number
        },
        maxChampionsKilled: {
          type: Number
        },
        maxCombatPlayerScore: {
          type: Number
        },
        maxLargestCriticalStrike: {
          type: Number
        },
        maxLargestKillingSpree: {
          type: Number
        },
        maxNodeCapture: {
          type: Number
        },
        maxNodeCaptureAssist: {
          type: Number
        },
        maxNodeNeutralize: {
          type: Number
        },
        maxNodeNeutralizeAssist: {
          type: Number
        },
        maxNumDeaths: {
          type: Number
        },
        maxObjectivePlayerScore: {
          type: Number
        },
        maxTeamObjective: {
          type: Number
        },
        maxTimePlayed: {
          type: Number
        },
        maxTimeSpentLiving: {
          type: Number
        },
        maxTotalPlayerScore: {
          type: Number
        },
        mostChampionKillsPerSession: {
          type: Number
        },
        mostSpellsCast: {
          type: Number
        },
        normalGamesPlayed: {
          type: Number
        },
        rankedPremadeGamesPlayed: {
          type: Number
        },
        rankedSoloGamesPlayed: {
          type: Number
        },
        totalAssists: {
          type: Number
        },
        totalChampionKills: {
          type: Number
        },
        totalDamageDealt: {
          type: Number
        },
        totalDamageTaken: {
          type: Number
        },
        totalDeathsPerSession: {
          type: Number
        },
        totalDoubleKills: {
          type: Number
        },
        totalFirstBlood: {
          type: Number
        },
        totalGoldEarned: {
          type: Number
        },
        totalHeal: {
          type: Number
        },
        totalMagicDamageDealt: {
          type: Number
        },
        totalMinionKills: {
          type: Number
        },
        totalNeutralMinionsKilled: {
          type: Number
        },
        totalNodeCapture: {
          type: Number
        },
        totalNodeNeutralize: {
          type: Number
        },
        totalPentaKills: {
          type: Number
        },
        totalPhysicalDamageDealt: {
          type: Number
        },
        totalQuadraKills: {
          type: Number
        },
        totalSessionsLost: {
          type: Number
        },
        totalSessionsPlayed: {
          type: Number
        },
        totalSessionsWon: {
          type: Number
        },
        totalTripleKills: {
          type: Number
        },
        totalTurretsKilled: {
          type: Number
        },
        totalUnrealKills: {
          type: Number
        }
      },
      losses: {
        type: Number
      },
      modifyDate: {
        type: Number
      },
      wins: {
        type: Number
      }
    },{
      playerStatSummaryType: {
        type: String
      },
      aggregatedStats: {
        averageAssists: {
          type: Number
        },
        averageChampionsKilled:{
          type: Number
        },
        averageCombatPlayerScore:{
          type: Number
        },
        averageNodeCapture: {
          type: Number
        },
        averageNodeCaptureAssist: {
          type: Number
        },
        averageNodeNeutralize: {
          type: Number
        },
        averageNodeNeutralizeAssist: {
          type: Number
        },
        averageNumDeaths: {
          type: Number
        },
        averageObjectivePlayerScore: {
          type: Number
        },
        averageTeamObjective: {
          type: Number
        },
        averageTotalPlayerScore: {
          type: Number
        },
        botGamesPlayed: {
          type: Number
        },
        killingSpree: {
          type: Number
        },
        maxAssists: {
          type: Number
        },
        maxChampionsKilled: {
          type: Number
        },
        maxCombatPlayerScore: {
          type: Number
        },
        maxLargestCriticalStrike: {
          type: Number
        },
        maxLargestKillingSpree: {
          type: Number
        },
        maxNodeCapture: {
          type: Number
        },
        maxNodeCaptureAssist: {
          type: Number
        },
        maxNodeNeutralize: {
          type: Number
        },
        maxNodeNeutralizeAssist: {
          type: Number
        },
        maxNumDeaths: {
          type: Number
        },
        maxObjectivePlayerScore: {
          type: Number
        },
        maxTeamObjective: {
          type: Number
        },
        maxTimePlayed: {
          type: Number
        },
        maxTimeSpentLiving: {
          type: Number
        },
        maxTotalPlayerScore: {
          type: Number
        },
        mostChampionKillsPerSession: {
          type: Number
        },
        mostSpellsCast: {
          type: Number
        },
        normalGamesPlayed: {
          type: Number
        },
        rankedPremadeGamesPlayed: {
          type: Number
        },
        rankedSoloGamesPlayed: {
          type: Number
        },
        totalAssists: {
          type: Number
        },
        totalChampionKills: {
          type: Number
        },
        totalDamageDealt: {
          type: Number
        },
        totalDamageTaken: {
          type: Number
        },
        totalDeathsPerSession: {
          type: Number
        },
        totalDoubleKills: {
          type: Number
        },
        totalFirstBlood: {
          type: Number
        },
        totalGoldEarned: {
          type: Number
        },
        totalHeal: {
          type: Number
        },
        totalMagicDamageDealt: {
          type: Number
        },
        totalMinionKills: {
          type: Number
        },
        totalNeutralMinionsKilled: {
          type: Number
        },
        totalNodeCapture: {
          type: Number
        },
        totalNodeNeutralize: {
          type: Number
        },
        totalPentaKills: {
          type: Number
        },
        totalPhysicalDamageDealt: {
          type: Number
        },
        totalQuadraKills: {
          type: Number
        },
        totalSessionsLost: {
          type: Number
        },
        totalSessionsPlayed: {
          type: Number
        },
        totalSessionsWon: {
          type: Number
        },
        totalTripleKills: {
          type: Number
        },
        totalTurretsKilled: {
          type: Number
        },
        totalUnrealKills: {
          type: Number
        }
      },
      losses: {
        type: Number
      },
      modifyDate: {
        type: Number
      },
      wins: {
        type: Number
      }
    },{
      playerStatSummaryType: {
        type: String
      },
      aggregatedStats: {
        averageAssists: {
          type: Number
        },
        averageChampionsKilled:{
          type: Number
        },
        averageCombatPlayerScore:{
          type: Number
        },
        averageNodeCapture: {
          type: Number
        },
        averageNodeCaptureAssist: {
          type: Number
        },
        averageNodeNeutralize: {
          type: Number
        },
        averageNodeNeutralizeAssist: {
          type: Number
        },
        averageNumDeaths: {
          type: Number
        },
        averageObjectivePlayerScore: {
          type: Number
        },
        averageTeamObjective: {
          type: Number
        },
        averageTotalPlayerScore: {
          type: Number
        },
        botGamesPlayed: {
          type: Number
        },
        killingSpree: {
          type: Number
        },
        maxAssists: {
          type: Number
        },
        maxChampionsKilled: {
          type: Number
        },
        maxCombatPlayerScore: {
          type: Number
        },
        maxLargestCriticalStrike: {
          type: Number
        },
        maxLargestKillingSpree: {
          type: Number
        },
        maxNodeCapture: {
          type: Number
        },
        maxNodeCaptureAssist: {
          type: Number
        },
        maxNodeNeutralize: {
          type: Number
        },
        maxNodeNeutralizeAssist: {
          type: Number
        },
        maxNumDeaths: {
          type: Number
        },
        maxObjectivePlayerScore: {
          type: Number
        },
        maxTeamObjective: {
          type: Number
        },
        maxTimePlayed: {
          type: Number
        },
        maxTimeSpentLiving: {
          type: Number
        },
        maxTotalPlayerScore: {
          type: Number
        },
        mostChampionKillsPerSession: {
          type: Number
        },
        mostSpellsCast: {
          type: Number
        },
        normalGamesPlayed: {
          type: Number
        },
        rankedPremadeGamesPlayed: {
          type: Number
        },
        rankedSoloGamesPlayed: {
          type: Number
        },
        totalAssists: {
          type: Number
        },
        totalChampionKills: {
          type: Number
        },
        totalDamageDealt: {
          type: Number
        },
        totalDamageTaken: {
          type: Number
        },
        totalDeathsPerSession: {
          type: Number
        },
        totalDoubleKills: {
          type: Number
        },
        totalFirstBlood: {
          type: Number
        },
        totalGoldEarned: {
          type: Number
        },
        totalHeal: {
          type: Number
        },
        totalMagicDamageDealt: {
          type: Number
        },
        totalMinionKills: {
          type: Number
        },
        totalNeutralMinionsKilled: {
          type: Number
        },
        totalNodeCapture: {
          type: Number
        },
        totalNodeNeutralize: {
          type: Number
        },
        totalPentaKills: {
          type: Number
        },
        totalPhysicalDamageDealt: {
          type: Number
        },
        totalQuadraKills: {
          type: Number
        },
        totalSessionsLost: {
          type: Number
        },
        totalSessionsPlayed: {
          type: Number
        },
        totalSessionsWon: {
          type: Number
        },
        totalTripleKills: {
          type: Number
        },
        totalTurretsKilled: {
          type: Number
        },
        totalUnrealKills: {
          type: Number
        }
      },
      losses: {
        type: Number
      },
      modifyDate: {
        type: Number
      },
      wins: {
        type: Number
      }
    },{
      playerStatSummaryType: {
        type: String
      },
      aggregatedStats: {
        averageAssists: {
          type: Number
        },
        averageChampionsKilled:{
          type: Number
        },
        averageCombatPlayerScore:{
          type: Number
        },
        averageNodeCapture: {
          type: Number
        },
        averageNodeCaptureAssist: {
          type: Number
        },
        averageNodeNeutralize: {
          type: Number
        },
        averageNodeNeutralizeAssist: {
          type: Number
        },
        averageNumDeaths: {
          type: Number
        },
        averageObjectivePlayerScore: {
          type: Number
        },
        averageTeamObjective: {
          type: Number
        },
        averageTotalPlayerScore: {
          type: Number
        },
        botGamesPlayed: {
          type: Number
        },
        killingSpree: {
          type: Number
        },
        maxAssists: {
          type: Number
        },
        maxChampionsKilled: {
          type: Number
        },
        maxCombatPlayerScore: {
          type: Number
        },
        maxLargestCriticalStrike: {
          type: Number
        },
        maxLargestKillingSpree: {
          type: Number
        },
        maxNodeCapture: {
          type: Number
        },
        maxNodeCaptureAssist: {
          type: Number
        },
        maxNodeNeutralize: {
          type: Number
        },
        maxNodeNeutralizeAssist: {
          type: Number
        },
        maxNumDeaths: {
          type: Number
        },
        maxObjectivePlayerScore: {
          type: Number
        },
        maxTeamObjective: {
          type: Number
        },
        maxTimePlayed: {
          type: Number
        },
        maxTimeSpentLiving: {
          type: Number
        },
        maxTotalPlayerScore: {
          type: Number
        },
        mostChampionKillsPerSession: {
          type: Number
        },
        mostSpellsCast: {
          type: Number
        },
        normalGamesPlayed: {
          type: Number
        },
        rankedPremadeGamesPlayed: {
          type: Number
        },
        rankedSoloGamesPlayed: {
          type: Number
        },
        totalAssists: {
          type: Number
        },
        totalChampionKills: {
          type: Number
        },
        totalDamageDealt: {
          type: Number
        },
        totalDamageTaken: {
          type: Number
        },
        totalDeathsPerSession: {
          type: Number
        },
        totalDoubleKills: {
          type: Number
        },
        totalFirstBlood: {
          type: Number
        },
        totalGoldEarned: {
          type: Number
        },
        totalHeal: {
          type: Number
        },
        totalMagicDamageDealt: {
          type: Number
        },
        totalMinionKills: {
          type: Number
        },
        totalNeutralMinionsKilled: {
          type: Number
        },
        totalNodeCapture: {
          type: Number
        },
        totalNodeNeutralize: {
          type: Number
        },
        totalPentaKills: {
          type: Number
        },
        totalPhysicalDamageDealt: {
          type: Number
        },
        totalQuadraKills: {
          type: Number
        },
        totalSessionsLost: {
          type: Number
        },
        totalSessionsPlayed: {
          type: Number
        },
        totalSessionsWon: {
          type: Number
        },
        totalTripleKills: {
          type: Number
        },
        totalTurretsKilled: {
          type: Number
        },
        totalUnrealKills: {
          type: Number
        }
      },
      losses: {
        type: Number
      },
      modifyDate: {
        type: Number
      },
      wins: {
        type: Number
      }
    },{
      playerStatSummaryType: {
        type: String
      },
      aggregatedStats: {
        averageAssists: {
          type: Number
        },
        averageChampionsKilled:{
          type: Number
        },
        averageCombatPlayerScore:{
          type: Number
        },
        averageNodeCapture: {
          type: Number
        },
        averageNodeCaptureAssist: {
          type: Number
        },
        averageNodeNeutralize: {
          type: Number
        },
        averageNodeNeutralizeAssist: {
          type: Number
        },
        averageNumDeaths: {
          type: Number
        },
        averageObjectivePlayerScore: {
          type: Number
        },
        averageTeamObjective: {
          type: Number
        },
        averageTotalPlayerScore: {
          type: Number
        },
        botGamesPlayed: {
          type: Number
        },
        killingSpree: {
          type: Number
        },
        maxAssists: {
          type: Number
        },
        maxChampionsKilled: {
          type: Number
        },
        maxCombatPlayerScore: {
          type: Number
        },
        maxLargestCriticalStrike: {
          type: Number
        },
        maxLargestKillingSpree: {
          type: Number
        },
        maxNodeCapture: {
          type: Number
        },
        maxNodeCaptureAssist: {
          type: Number
        },
        maxNodeNeutralize: {
          type: Number
        },
        maxNodeNeutralizeAssist: {
          type: Number
        },
        maxNumDeaths: {
          type: Number
        },
        maxObjectivePlayerScore: {
          type: Number
        },
        maxTeamObjective: {
          type: Number
        },
        maxTimePlayed: {
          type: Number
        },
        maxTimeSpentLiving: {
          type: Number
        },
        maxTotalPlayerScore: {
          type: Number
        },
        mostChampionKillsPerSession: {
          type: Number
        },
        mostSpellsCast: {
          type: Number
        },
        normalGamesPlayed: {
          type: Number
        },
        rankedPremadeGamesPlayed: {
          type: Number
        },
        rankedSoloGamesPlayed: {
          type: Number
        },
        totalAssists: {
          type: Number
        },
        totalChampionKills: {
          type: Number
        },
        totalDamageDealt: {
          type: Number
        },
        totalDamageTaken: {
          type: Number
        },
        totalDeathsPerSession: {
          type: Number
        },
        totalDoubleKills: {
          type: Number
        },
        totalFirstBlood: {
          type: Number
        },
        totalGoldEarned: {
          type: Number
        },
        totalHeal: {
          type: Number
        },
        totalMagicDamageDealt: {
          type: Number
        },
        totalMinionKills: {
          type: Number
        },
        totalNeutralMinionsKilled: {
          type: Number
        },
        totalNodeCapture: {
          type: Number
        },
        totalNodeNeutralize: {
          type: Number
        },
        totalPentaKills: {
          type: Number
        },
        totalPhysicalDamageDealt: {
          type: Number
        },
        totalQuadraKills: {
          type: Number
        },
        totalSessionsLost: {
          type: Number
        },
        totalSessionsPlayed: {
          type: Number
        },
        totalSessionsWon: {
          type: Number
        },
        totalTripleKills: {
          type: Number
        },
        totalTurretsKilled: {
          type: Number
        },
        totalUnrealKills: {
          type: Number
        }
      },
      losses: {
        type: Number
      },
      modifyDate: {
        type: Number
      },
      wins: {
        type: Number
      }
    },{
      playerStatSummaryType: {
        type: String
      },
      aggregatedStats: {
        averageAssists: {
          type: Number
        },
        averageChampionsKilled:{
          type: Number
        },
        averageCombatPlayerScore:{
          type: Number
        },
        averageNodeCapture: {
          type: Number
        },
        averageNodeCaptureAssist: {
          type: Number
        },
        averageNodeNeutralize: {
          type: Number
        },
        averageNodeNeutralizeAssist: {
          type: Number
        },
        averageNumDeaths: {
          type: Number
        },
        averageObjectivePlayerScore: {
          type: Number
        },
        averageTeamObjective: {
          type: Number
        },
        averageTotalPlayerScore: {
          type: Number
        },
        botGamesPlayed: {
          type: Number
        },
        killingSpree: {
          type: Number
        },
        maxAssists: {
          type: Number
        },
        maxChampionsKilled: {
          type: Number
        },
        maxCombatPlayerScore: {
          type: Number
        },
        maxLargestCriticalStrike: {
          type: Number
        },
        maxLargestKillingSpree: {
          type: Number
        },
        maxNodeCapture: {
          type: Number
        },
        maxNodeCaptureAssist: {
          type: Number
        },
        maxNodeNeutralize: {
          type: Number
        },
        maxNodeNeutralizeAssist: {
          type: Number
        },
        maxNumDeaths: {
          type: Number
        },
        maxObjectivePlayerScore: {
          type: Number
        },
        maxTeamObjective: {
          type: Number
        },
        maxTimePlayed: {
          type: Number
        },
        maxTimeSpentLiving: {
          type: Number
        },
        maxTotalPlayerScore: {
          type: Number
        },
        mostChampionKillsPerSession: {
          type: Number
        },
        mostSpellsCast: {
          type: Number
        },
        normalGamesPlayed: {
          type: Number
        },
        rankedPremadeGamesPlayed: {
          type: Number
        },
        rankedSoloGamesPlayed: {
          type: Number
        },
        totalAssists: {
          type: Number
        },
        totalChampionKills: {
          type: Number
        },
        totalDamageDealt: {
          type: Number
        },
        totalDamageTaken: {
          type: Number
        },
        totalDeathsPerSession: {
          type: Number
        },
        totalDoubleKills: {
          type: Number
        },
        totalFirstBlood: {
          type: Number
        },
        totalGoldEarned: {
          type: Number
        },
        totalHeal: {
          type: Number
        },
        totalMagicDamageDealt: {
          type: Number
        },
        totalMinionKills: {
          type: Number
        },
        totalNeutralMinionsKilled: {
          type: Number
        },
        totalNodeCapture: {
          type: Number
        },
        totalNodeNeutralize: {
          type: Number
        },
        totalPentaKills: {
          type: Number
        },
        totalPhysicalDamageDealt: {
          type: Number
        },
        totalQuadraKills: {
          type: Number
        },
        totalSessionsLost: {
          type: Number
        },
        totalSessionsPlayed: {
          type: Number
        },
        totalSessionsWon: {
          type: Number
        },
        totalTripleKills: {
          type: Number
        },
        totalTurretsKilled: {
          type: Number
        },
        totalUnrealKills: {
          type: Number
        }
      },
      losses: {
        type: Number
      },
      modifyDate: {
        type: Number
      },
      wins: {
        type: Number
      }
    },{
      playerStatSummaryType: {
        type: String
      },
      aggregatedStats: {
        averageAssists: {
          type: Number
        },
        averageChampionsKilled:{
          type: Number
        },
        averageCombatPlayerScore:{
          type: Number
        },
        averageNodeCapture: {
          type: Number
        },
        averageNodeCaptureAssist: {
          type: Number
        },
        averageNodeNeutralize: {
          type: Number
        },
        averageNodeNeutralizeAssist: {
          type: Number
        },
        averageNumDeaths: {
          type: Number
        },
        averageObjectivePlayerScore: {
          type: Number
        },
        averageTeamObjective: {
          type: Number
        },
        averageTotalPlayerScore: {
          type: Number
        },
        botGamesPlayed: {
          type: Number
        },
        killingSpree: {
          type: Number
        },
        maxAssists: {
          type: Number
        },
        maxChampionsKilled: {
          type: Number
        },
        maxCombatPlayerScore: {
          type: Number
        },
        maxLargestCriticalStrike: {
          type: Number
        },
        maxLargestKillingSpree: {
          type: Number
        },
        maxNodeCapture: {
          type: Number
        },
        maxNodeCaptureAssist: {
          type: Number
        },
        maxNodeNeutralize: {
          type: Number
        },
        maxNodeNeutralizeAssist: {
          type: Number
        },
        maxNumDeaths: {
          type: Number
        },
        maxObjectivePlayerScore: {
          type: Number
        },
        maxTeamObjective: {
          type: Number
        },
        maxTimePlayed: {
          type: Number
        },
        maxTimeSpentLiving: {
          type: Number
        },
        maxTotalPlayerScore: {
          type: Number
        },
        mostChampionKillsPerSession: {
          type: Number
        },
        mostSpellsCast: {
          type: Number
        },
        normalGamesPlayed: {
          type: Number
        },
        rankedPremadeGamesPlayed: {
          type: Number
        },
        rankedSoloGamesPlayed: {
          type: Number
        },
        totalAssists: {
          type: Number
        },
        totalChampionKills: {
          type: Number
        },
        totalDamageDealt: {
          type: Number
        },
        totalDamageTaken: {
          type: Number
        },
        totalDeathsPerSession: {
          type: Number
        },
        totalDoubleKills: {
          type: Number
        },
        totalFirstBlood: {
          type: Number
        },
        totalGoldEarned: {
          type: Number
        },
        totalHeal: {
          type: Number
        },
        totalMagicDamageDealt: {
          type: Number
        },
        totalMinionKills: {
          type: Number
        },
        totalNeutralMinionsKilled: {
          type: Number
        },
        totalNodeCapture: {
          type: Number
        },
        totalNodeNeutralize: {
          type: Number
        },
        totalPentaKills: {
          type: Number
        },
        totalPhysicalDamageDealt: {
          type: Number
        },
        totalQuadraKills: {
          type: Number
        },
        totalSessionsLost: {
          type: Number
        },
        totalSessionsPlayed: {
          type: Number
        },
        totalSessionsWon: {
          type: Number
        },
        totalTripleKills: {
          type: Number
        },
        totalTurretsKilled: {
          type: Number
        },
        totalUnrealKills: {
          type: Number
        }
      },
      losses: {
        type: Number
      },
      modifyDate: {
        type: Number
      },
      wins: {
        type: Number
      }
    },{
      playerStatSummaryType: {
        type: String
      },
      aggregatedStats: {
        averageAssists: {
          type: Number
        },
        averageChampionsKilled:{
          type: Number
        },
        averageCombatPlayerScore:{
          type: Number
        },
        averageNodeCapture: {
          type: Number
        },
        averageNodeCaptureAssist: {
          type: Number
        },
        averageNodeNeutralize: {
          type: Number
        },
        averageNodeNeutralizeAssist: {
          type: Number
        },
        averageNumDeaths: {
          type: Number
        },
        averageObjectivePlayerScore: {
          type: Number
        },
        averageTeamObjective: {
          type: Number
        },
        averageTotalPlayerScore: {
          type: Number
        },
        botGamesPlayed: {
          type: Number
        },
        killingSpree: {
          type: Number
        },
        maxAssists: {
          type: Number
        },
        maxChampionsKilled: {
          type: Number
        },
        maxCombatPlayerScore: {
          type: Number
        },
        maxLargestCriticalStrike: {
          type: Number
        },
        maxLargestKillingSpree: {
          type: Number
        },
        maxNodeCapture: {
          type: Number
        },
        maxNodeCaptureAssist: {
          type: Number
        },
        maxNodeNeutralize: {
          type: Number
        },
        maxNodeNeutralizeAssist: {
          type: Number
        },
        maxNumDeaths: {
          type: Number
        },
        maxObjectivePlayerScore: {
          type: Number
        },
        maxTeamObjective: {
          type: Number
        },
        maxTimePlayed: {
          type: Number
        },
        maxTimeSpentLiving: {
          type: Number
        },
        maxTotalPlayerScore: {
          type: Number
        },
        mostChampionKillsPerSession: {
          type: Number
        },
        mostSpellsCast: {
          type: Number
        },
        normalGamesPlayed: {
          type: Number
        },
        rankedPremadeGamesPlayed: {
          type: Number
        },
        rankedSoloGamesPlayed: {
          type: Number
        },
        totalAssists: {
          type: Number
        },
        totalChampionKills: {
          type: Number
        },
        totalDamageDealt: {
          type: Number
        },
        totalDamageTaken: {
          type: Number
        },
        totalDeathsPerSession: {
          type: Number
        },
        totalDoubleKills: {
          type: Number
        },
        totalFirstBlood: {
          type: Number
        },
        totalGoldEarned: {
          type: Number
        },
        totalHeal: {
          type: Number
        },
        totalMagicDamageDealt: {
          type: Number
        },
        totalMinionKills: {
          type: Number
        },
        totalNeutralMinionsKilled: {
          type: Number
        },
        totalNodeCapture: {
          type: Number
        },
        totalNodeNeutralize: {
          type: Number
        },
        totalPentaKills: {
          type: Number
        },
        totalPhysicalDamageDealt: {
          type: Number
        },
        totalQuadraKills: {
          type: Number
        },
        totalSessionsLost: {
          type: Number
        },
        totalSessionsPlayed: {
          type: Number
        },
        totalSessionsWon: {
          type: Number
        },
        totalTripleKills: {
          type: Number
        },
        totalTurretsKilled: {
          type: Number
        },
        totalUnrealKills: {
          type: Number
        }
      },
      losses: {
        type: Number
      },
      modifyDate: {
        type: Number
      },
      wins: {
        type: Number
      }
    },{
      playerStatSummaryType: {
        type: String
      },
      aggregatedStats: {
        averageAssists: {
          type: Number
        },
        averageChampionsKilled:{
          type: Number
        },
        averageCombatPlayerScore:{
          type: Number
        },
        averageNodeCapture: {
          type: Number
        },
        averageNodeCaptureAssist: {
          type: Number
        },
        averageNodeNeutralize: {
          type: Number
        },
        averageNodeNeutralizeAssist: {
          type: Number
        },
        averageNumDeaths: {
          type: Number
        },
        averageObjectivePlayerScore: {
          type: Number
        },
        averageTeamObjective: {
          type: Number
        },
        averageTotalPlayerScore: {
          type: Number
        },
        botGamesPlayed: {
          type: Number
        },
        killingSpree: {
          type: Number
        },
        maxAssists: {
          type: Number
        },
        maxChampionsKilled: {
          type: Number
        },
        maxCombatPlayerScore: {
          type: Number
        },
        maxLargestCriticalStrike: {
          type: Number
        },
        maxLargestKillingSpree: {
          type: Number
        },
        maxNodeCapture: {
          type: Number
        },
        maxNodeCaptureAssist: {
          type: Number
        },
        maxNodeNeutralize: {
          type: Number
        },
        maxNodeNeutralizeAssist: {
          type: Number
        },
        maxNumDeaths: {
          type: Number
        },
        maxObjectivePlayerScore: {
          type: Number
        },
        maxTeamObjective: {
          type: Number
        },
        maxTimePlayed: {
          type: Number
        },
        maxTimeSpentLiving: {
          type: Number
        },
        maxTotalPlayerScore: {
          type: Number
        },
        mostChampionKillsPerSession: {
          type: Number
        },
        mostSpellsCast: {
          type: Number
        },
        normalGamesPlayed: {
          type: Number
        },
        rankedPremadeGamesPlayed: {
          type: Number
        },
        rankedSoloGamesPlayed: {
          type: Number
        },
        totalAssists: {
          type: Number
        },
        totalChampionKills: {
          type: Number
        },
        totalDamageDealt: {
          type: Number
        },
        totalDamageTaken: {
          type: Number
        },
        totalDeathsPerSession: {
          type: Number
        },
        totalDoubleKills: {
          type: Number
        },
        totalFirstBlood: {
          type: Number
        },
        totalGoldEarned: {
          type: Number
        },
        totalHeal: {
          type: Number
        },
        totalMagicDamageDealt: {
          type: Number
        },
        totalMinionKills: {
          type: Number
        },
        totalNeutralMinionsKilled: {
          type: Number
        },
        totalNodeCapture: {
          type: Number
        },
        totalNodeNeutralize: {
          type: Number
        },
        totalPentaKills: {
          type: Number
        },
        totalPhysicalDamageDealt: {
          type: Number
        },
        totalQuadraKills: {
          type: Number
        },
        totalSessionsLost: {
          type: Number
        },
        totalSessionsPlayed: {
          type: Number
        },
        totalSessionsWon: {
          type: Number
        },
        totalTripleKills: {
          type: Number
        },
        totalTurretsKilled: {
          type: Number
        },
        totalUnrealKills: {
          type: Number
        }
      },
      losses: {
        type: Number
      },
      modifyDate: {
        type: Number
      },
      wins: {
        type: Number
      }
    },{
      playerStatSummaryType: {
        type: String
      },
      aggregatedStats: {
        averageAssists: {
          type: Number
        },
        averageChampionsKilled:{
          type: Number
        },
        averageCombatPlayerScore:{
          type: Number
        },
        averageNodeCapture: {
          type: Number
        },
        averageNodeCaptureAssist: {
          type: Number
        },
        averageNodeNeutralize: {
          type: Number
        },
        averageNodeNeutralizeAssist: {
          type: Number
        },
        averageNumDeaths: {
          type: Number
        },
        averageObjectivePlayerScore: {
          type: Number
        },
        averageTeamObjective: {
          type: Number
        },
        averageTotalPlayerScore: {
          type: Number
        },
        botGamesPlayed: {
          type: Number
        },
        killingSpree: {
          type: Number
        },
        maxAssists: {
          type: Number
        },
        maxChampionsKilled: {
          type: Number
        },
        maxCombatPlayerScore: {
          type: Number
        },
        maxLargestCriticalStrike: {
          type: Number
        },
        maxLargestKillingSpree: {
          type: Number
        },
        maxNodeCapture: {
          type: Number
        },
        maxNodeCaptureAssist: {
          type: Number
        },
        maxNodeNeutralize: {
          type: Number
        },
        maxNodeNeutralizeAssist: {
          type: Number
        },
        maxNumDeaths: {
          type: Number
        },
        maxObjectivePlayerScore: {
          type: Number
        },
        maxTeamObjective: {
          type: Number
        },
        maxTimePlayed: {
          type: Number
        },
        maxTimeSpentLiving: {
          type: Number
        },
        maxTotalPlayerScore: {
          type: Number
        },
        mostChampionKillsPerSession: {
          type: Number
        },
        mostSpellsCast: {
          type: Number
        },
        normalGamesPlayed: {
          type: Number
        },
        rankedPremadeGamesPlayed: {
          type: Number
        },
        rankedSoloGamesPlayed: {
          type: Number
        },
        totalAssists: {
          type: Number
        },
        totalChampionKills: {
          type: Number
        },
        totalDamageDealt: {
          type: Number
        },
        totalDamageTaken: {
          type: Number
        },
        totalDeathsPerSession: {
          type: Number
        },
        totalDoubleKills: {
          type: Number
        },
        totalFirstBlood: {
          type: Number
        },
        totalGoldEarned: {
          type: Number
        },
        totalHeal: {
          type: Number
        },
        totalMagicDamageDealt: {
          type: Number
        },
        totalMinionKills: {
          type: Number
        },
        totalNeutralMinionsKilled: {
          type: Number
        },
        totalNodeCapture: {
          type: Number
        },
        totalNodeNeutralize: {
          type: Number
        },
        totalPentaKills: {
          type: Number
        },
        totalPhysicalDamageDealt: {
          type: Number
        },
        totalQuadraKills: {
          type: Number
        },
        totalSessionsLost: {
          type: Number
        },
        totalSessionsPlayed: {
          type: Number
        },
        totalSessionsWon: {
          type: Number
        },
        totalTripleKills: {
          type: Number
        },
        totalTurretsKilled: {
          type: Number
        },
        totalUnrealKills: {
          type: Number
        }
      },
      losses: {
        type: Number
      },
      modifyDate: {
        type: Number
      },
      wins: {
        type: Number
      }
    },{
      playerStatSummaryType: {
        type: String
      },
      aggregatedStats: {
        averageAssists: {
          type: Number
        },
        averageChampionsKilled:{
          type: Number
        },
        averageCombatPlayerScore:{
          type: Number
        },
        averageNodeCapture: {
          type: Number
        },
        averageNodeCaptureAssist: {
          type: Number
        },
        averageNodeNeutralize: {
          type: Number
        },
        averageNodeNeutralizeAssist: {
          type: Number
        },
        averageNumDeaths: {
          type: Number
        },
        averageObjectivePlayerScore: {
          type: Number
        },
        averageTeamObjective: {
          type: Number
        },
        averageTotalPlayerScore: {
          type: Number
        },
        botGamesPlayed: {
          type: Number
        },
        killingSpree: {
          type: Number
        },
        maxAssists: {
          type: Number
        },
        maxChampionsKilled: {
          type: Number
        },
        maxCombatPlayerScore: {
          type: Number
        },
        maxLargestCriticalStrike: {
          type: Number
        },
        maxLargestKillingSpree: {
          type: Number
        },
        maxNodeCapture: {
          type: Number
        },
        maxNodeCaptureAssist: {
          type: Number
        },
        maxNodeNeutralize: {
          type: Number
        },
        maxNodeNeutralizeAssist: {
          type: Number
        },
        maxNumDeaths: {
          type: Number
        },
        maxObjectivePlayerScore: {
          type: Number
        },
        maxTeamObjective: {
          type: Number
        },
        maxTimePlayed: {
          type: Number
        },
        maxTimeSpentLiving: {
          type: Number
        },
        maxTotalPlayerScore: {
          type: Number
        },
        mostChampionKillsPerSession: {
          type: Number
        },
        mostSpellsCast: {
          type: Number
        },
        normalGamesPlayed: {
          type: Number
        },
        rankedPremadeGamesPlayed: {
          type: Number
        },
        rankedSoloGamesPlayed: {
          type: Number
        },
        totalAssists: {
          type: Number
        },
        totalChampionKills: {
          type: Number
        },
        totalDamageDealt: {
          type: Number
        },
        totalDamageTaken: {
          type: Number
        },
        totalDeathsPerSession: {
          type: Number
        },
        totalDoubleKills: {
          type: Number
        },
        totalFirstBlood: {
          type: Number
        },
        totalGoldEarned: {
          type: Number
        },
        totalHeal: {
          type: Number
        },
        totalMagicDamageDealt: {
          type: Number
        },
        totalMinionKills: {
          type: Number
        },
        totalNeutralMinionsKilled: {
          type: Number
        },
        totalNodeCapture: {
          type: Number
        },
        totalNodeNeutralize: {
          type: Number
        },
        totalPentaKills: {
          type: Number
        },
        totalPhysicalDamageDealt: {
          type: Number
        },
        totalQuadraKills: {
          type: Number
        },
        totalSessionsLost: {
          type: Number
        },
        totalSessionsPlayed: {
          type: Number
        },
        totalSessionsWon: {
          type: Number
        },
        totalTripleKills: {
          type: Number
        },
        totalTurretsKilled: {
          type: Number
        },
        totalUnrealKills: {
          type: Number
        }
      },
      losses: {
        type: Number
      },
      modifyDate: {
        type: Number
      },
      wins: {
        type: Number
      }
    },{
      playerStatSummaryType: {
        type: String
      },
      aggregatedStats: {
        averageAssists: {
          type: Number
        },
        averageChampionsKilled:{
          type: Number
        },
        averageCombatPlayerScore:{
          type: Number
        },
        averageNodeCapture: {
          type: Number
        },
        averageNodeCaptureAssist: {
          type: Number
        },
        averageNodeNeutralize: {
          type: Number
        },
        averageNodeNeutralizeAssist: {
          type: Number
        },
        averageNumDeaths: {
          type: Number
        },
        averageObjectivePlayerScore: {
          type: Number
        },
        averageTeamObjective: {
          type: Number
        },
        averageTotalPlayerScore: {
          type: Number
        },
        botGamesPlayed: {
          type: Number
        },
        killingSpree: {
          type: Number
        },
        maxAssists: {
          type: Number
        },
        maxChampionsKilled: {
          type: Number
        },
        maxCombatPlayerScore: {
          type: Number
        },
        maxLargestCriticalStrike: {
          type: Number
        },
        maxLargestKillingSpree: {
          type: Number
        },
        maxNodeCapture: {
          type: Number
        },
        maxNodeCaptureAssist: {
          type: Number
        },
        maxNodeNeutralize: {
          type: Number
        },
        maxNodeNeutralizeAssist: {
          type: Number
        },
        maxNumDeaths: {
          type: Number
        },
        maxObjectivePlayerScore: {
          type: Number
        },
        maxTeamObjective: {
          type: Number
        },
        maxTimePlayed: {
          type: Number
        },
        maxTimeSpentLiving: {
          type: Number
        },
        maxTotalPlayerScore: {
          type: Number
        },
        mostChampionKillsPerSession: {
          type: Number
        },
        mostSpellsCast: {
          type: Number
        },
        normalGamesPlayed: {
          type: Number
        },
        rankedPremadeGamesPlayed: {
          type: Number
        },
        rankedSoloGamesPlayed: {
          type: Number
        },
        totalAssists: {
          type: Number
        },
        totalChampionKills: {
          type: Number
        },
        totalDamageDealt: {
          type: Number
        },
        totalDamageTaken: {
          type: Number
        },
        totalDeathsPerSession: {
          type: Number
        },
        totalDoubleKills: {
          type: Number
        },
        totalFirstBlood: {
          type: Number
        },
        totalGoldEarned: {
          type: Number
        },
        totalHeal: {
          type: Number
        },
        totalMagicDamageDealt: {
          type: Number
        },
        totalMinionKills: {
          type: Number
        },
        totalNeutralMinionsKilled: {
          type: Number
        },
        totalNodeCapture: {
          type: Number
        },
        totalNodeNeutralize: {
          type: Number
        },
        totalPentaKills: {
          type: Number
        },
        totalPhysicalDamageDealt: {
          type: Number
        },
        totalQuadraKills: {
          type: Number
        },
        totalSessionsLost: {
          type: Number
        },
        totalSessionsPlayed: {
          type: Number
        },
        totalSessionsWon: {
          type: Number
        },
        totalTripleKills: {
          type: Number
        },
        totalTurretsKilled: {
          type: Number
        },
        totalUnrealKills: {
          type: Number
        }
      },
      losses: {
        type: Number
      },
      modifyDate: {
        type: Number
      },
      wins: {
        type: Number
      }
    },{
      playerStatSummaryType: {
        type: String
      },
      aggregatedStats: {
        averageAssists: {
          type: Number
        },
        averageChampionsKilled:{
          type: Number
        },
        averageCombatPlayerScore:{
          type: Number
        },
        averageNodeCapture: {
          type: Number
        },
        averageNodeCaptureAssist: {
          type: Number
        },
        averageNodeNeutralize: {
          type: Number
        },
        averageNodeNeutralizeAssist: {
          type: Number
        },
        averageNumDeaths: {
          type: Number
        },
        averageObjectivePlayerScore: {
          type: Number
        },
        averageTeamObjective: {
          type: Number
        },
        averageTotalPlayerScore: {
          type: Number
        },
        botGamesPlayed: {
          type: Number
        },
        killingSpree: {
          type: Number
        },
        maxAssists: {
          type: Number
        },
        maxChampionsKilled: {
          type: Number
        },
        maxCombatPlayerScore: {
          type: Number
        },
        maxLargestCriticalStrike: {
          type: Number
        },
        maxLargestKillingSpree: {
          type: Number
        },
        maxNodeCapture: {
          type: Number
        },
        maxNodeCaptureAssist: {
          type: Number
        },
        maxNodeNeutralize: {
          type: Number
        },
        maxNodeNeutralizeAssist: {
          type: Number
        },
        maxNumDeaths: {
          type: Number
        },
        maxObjectivePlayerScore: {
          type: Number
        },
        maxTeamObjective: {
          type: Number
        },
        maxTimePlayed: {
          type: Number
        },
        maxTimeSpentLiving: {
          type: Number
        },
        maxTotalPlayerScore: {
          type: Number
        },
        mostChampionKillsPerSession: {
          type: Number
        },
        mostSpellsCast: {
          type: Number
        },
        normalGamesPlayed: {
          type: Number
        },
        rankedPremadeGamesPlayed: {
          type: Number
        },
        rankedSoloGamesPlayed: {
          type: Number
        },
        totalAssists: {
          type: Number
        },
        totalChampionKills: {
          type: Number
        },
        totalDamageDealt: {
          type: Number
        },
        totalDamageTaken: {
          type: Number
        },
        totalDeathsPerSession: {
          type: Number
        },
        totalDoubleKills: {
          type: Number
        },
        totalFirstBlood: {
          type: Number
        },
        totalGoldEarned: {
          type: Number
        },
        totalHeal: {
          type: Number
        },
        totalMagicDamageDealt: {
          type: Number
        },
        totalMinionKills: {
          type: Number
        },
        totalNeutralMinionsKilled: {
          type: Number
        },
        totalNodeCapture: {
          type: Number
        },
        totalNodeNeutralize: {
          type: Number
        },
        totalPentaKills: {
          type: Number
        },
        totalPhysicalDamageDealt: {
          type: Number
        },
        totalQuadraKills: {
          type: Number
        },
        totalSessionsLost: {
          type: Number
        },
        totalSessionsPlayed: {
          type: Number
        },
        totalSessionsWon: {
          type: Number
        },
        totalTripleKills: {
          type: Number
        },
        totalTurretsKilled: {
          type: Number
        },
        totalUnrealKills: {
          type: Number
        }
      },
      losses: {
        type: Number
      },
      modifyDate: {
        type: Number
      },
      wins: {
        type: Number
      }
    },{
      playerStatSummaryType: {
        type: String
      },
      aggregatedStats: {
        averageAssists: {
          type: Number
        },
        averageChampionsKilled:{
          type: Number
        },
        averageCombatPlayerScore:{
          type: Number
        },
        averageNodeCapture: {
          type: Number
        },
        averageNodeCaptureAssist: {
          type: Number
        },
        averageNodeNeutralize: {
          type: Number
        },
        averageNodeNeutralizeAssist: {
          type: Number
        },
        averageNumDeaths: {
          type: Number
        },
        averageObjectivePlayerScore: {
          type: Number
        },
        averageTeamObjective: {
          type: Number
        },
        averageTotalPlayerScore: {
          type: Number
        },
        botGamesPlayed: {
          type: Number
        },
        killingSpree: {
          type: Number
        },
        maxAssists: {
          type: Number
        },
        maxChampionsKilled: {
          type: Number
        },
        maxCombatPlayerScore: {
          type: Number
        },
        maxLargestCriticalStrike: {
          type: Number
        },
        maxLargestKillingSpree: {
          type: Number
        },
        maxNodeCapture: {
          type: Number
        },
        maxNodeCaptureAssist: {
          type: Number
        },
        maxNodeNeutralize: {
          type: Number
        },
        maxNodeNeutralizeAssist: {
          type: Number
        },
        maxNumDeaths: {
          type: Number
        },
        maxObjectivePlayerScore: {
          type: Number
        },
        maxTeamObjective: {
          type: Number
        },
        maxTimePlayed: {
          type: Number
        },
        maxTimeSpentLiving: {
          type: Number
        },
        maxTotalPlayerScore: {
          type: Number
        },
        mostChampionKillsPerSession: {
          type: Number
        },
        mostSpellsCast: {
          type: Number
        },
        normalGamesPlayed: {
          type: Number
        },
        rankedPremadeGamesPlayed: {
          type: Number
        },
        rankedSoloGamesPlayed: {
          type: Number
        },
        totalAssists: {
          type: Number
        },
        totalChampionKills: {
          type: Number
        },
        totalDamageDealt: {
          type: Number
        },
        totalDamageTaken: {
          type: Number
        },
        totalDeathsPerSession: {
          type: Number
        },
        totalDoubleKills: {
          type: Number
        },
        totalFirstBlood: {
          type: Number
        },
        totalGoldEarned: {
          type: Number
        },
        totalHeal: {
          type: Number
        },
        totalMagicDamageDealt: {
          type: Number
        },
        totalMinionKills: {
          type: Number
        },
        totalNeutralMinionsKilled: {
          type: Number
        },
        totalNodeCapture: {
          type: Number
        },
        totalNodeNeutralize: {
          type: Number
        },
        totalPentaKills: {
          type: Number
        },
        totalPhysicalDamageDealt: {
          type: Number
        },
        totalQuadraKills: {
          type: Number
        },
        totalSessionsLost: {
          type: Number
        },
        totalSessionsPlayed: {
          type: Number
        },
        totalSessionsWon: {
          type: Number
        },
        totalTripleKills: {
          type: Number
        },
        totalTurretsKilled: {
          type: Number
        },
        totalUnrealKills: {
          type: Number
        }
      },
      losses: {
        type: Number
      },
      modifyDate: {
        type: Number
      },
      wins: {
        type: Number
      }
    },{
      playerStatSummaryType: {
        type: String
      },
      aggregatedStats: {
        averageAssists: {
          type: Number
        },
        averageChampionsKilled:{
          type: Number
        },
        averageCombatPlayerScore:{
          type: Number
        },
        averageNodeCapture: {
          type: Number
        },
        averageNodeCaptureAssist: {
          type: Number
        },
        averageNodeNeutralize: {
          type: Number
        },
        averageNodeNeutralizeAssist: {
          type: Number
        },
        averageNumDeaths: {
          type: Number
        },
        averageObjectivePlayerScore: {
          type: Number
        },
        averageTeamObjective: {
          type: Number
        },
        averageTotalPlayerScore: {
          type: Number
        },
        botGamesPlayed: {
          type: Number
        },
        killingSpree: {
          type: Number
        },
        maxAssists: {
          type: Number
        },
        maxChampionsKilled: {
          type: Number
        },
        maxCombatPlayerScore: {
          type: Number
        },
        maxLargestCriticalStrike: {
          type: Number
        },
        maxLargestKillingSpree: {
          type: Number
        },
        maxNodeCapture: {
          type: Number
        },
        maxNodeCaptureAssist: {
          type: Number
        },
        maxNodeNeutralize: {
          type: Number
        },
        maxNodeNeutralizeAssist: {
          type: Number
        },
        maxNumDeaths: {
          type: Number
        },
        maxObjectivePlayerScore: {
          type: Number
        },
        maxTeamObjective: {
          type: Number
        },
        maxTimePlayed: {
          type: Number
        },
        maxTimeSpentLiving: {
          type: Number
        },
        maxTotalPlayerScore: {
          type: Number
        },
        mostChampionKillsPerSession: {
          type: Number
        },
        mostSpellsCast: {
          type: Number
        },
        normalGamesPlayed: {
          type: Number
        },
        rankedPremadeGamesPlayed: {
          type: Number
        },
        rankedSoloGamesPlayed: {
          type: Number
        },
        totalAssists: {
          type: Number
        },
        totalChampionKills: {
          type: Number
        },
        totalDamageDealt: {
          type: Number
        },
        totalDamageTaken: {
          type: Number
        },
        totalDeathsPerSession: {
          type: Number
        },
        totalDoubleKills: {
          type: Number
        },
        totalFirstBlood: {
          type: Number
        },
        totalGoldEarned: {
          type: Number
        },
        totalHeal: {
          type: Number
        },
        totalMagicDamageDealt: {
          type: Number
        },
        totalMinionKills: {
          type: Number
        },
        totalNeutralMinionsKilled: {
          type: Number
        },
        totalNodeCapture: {
          type: Number
        },
        totalNodeNeutralize: {
          type: Number
        },
        totalPentaKills: {
          type: Number
        },
        totalPhysicalDamageDealt: {
          type: Number
        },
        totalQuadraKills: {
          type: Number
        },
        totalSessionsLost: {
          type: Number
        },
        totalSessionsPlayed: {
          type: Number
        },
        totalSessionsWon: {
          type: Number
        },
        totalTripleKills: {
          type: Number
        },
        totalTurretsKilled: {
          type: Number
        },
        totalUnrealKills: {
          type: Number
        }
      },
      losses: {
        type: Number
      },
      modifyDate: {
        type: Number
      },
      wins: {
        type: Number
      }
    },{
      playerStatSummaryType: {
        type: String
      },
      aggregatedStats: {
        averageAssists: {
          type: Number
        },
        averageChampionsKilled:{
          type: Number
        },
        averageCombatPlayerScore:{
          type: Number
        },
        averageNodeCapture: {
          type: Number
        },
        averageNodeCaptureAssist: {
          type: Number
        },
        averageNodeNeutralize: {
          type: Number
        },
        averageNodeNeutralizeAssist: {
          type: Number
        },
        averageNumDeaths: {
          type: Number
        },
        averageObjectivePlayerScore: {
          type: Number
        },
        averageTeamObjective: {
          type: Number
        },
        averageTotalPlayerScore: {
          type: Number
        },
        botGamesPlayed: {
          type: Number
        },
        killingSpree: {
          type: Number
        },
        maxAssists: {
          type: Number
        },
        maxChampionsKilled: {
          type: Number
        },
        maxCombatPlayerScore: {
          type: Number
        },
        maxLargestCriticalStrike: {
          type: Number
        },
        maxLargestKillingSpree: {
          type: Number
        },
        maxNodeCapture: {
          type: Number
        },
        maxNodeCaptureAssist: {
          type: Number
        },
        maxNodeNeutralize: {
          type: Number
        },
        maxNodeNeutralizeAssist: {
          type: Number
        },
        maxNumDeaths: {
          type: Number
        },
        maxObjectivePlayerScore: {
          type: Number
        },
        maxTeamObjective: {
          type: Number
        },
        maxTimePlayed: {
          type: Number
        },
        maxTimeSpentLiving: {
          type: Number
        },
        maxTotalPlayerScore: {
          type: Number
        },
        mostChampionKillsPerSession: {
          type: Number
        },
        mostSpellsCast: {
          type: Number
        },
        normalGamesPlayed: {
          type: Number
        },
        rankedPremadeGamesPlayed: {
          type: Number
        },
        rankedSoloGamesPlayed: {
          type: Number
        },
        totalAssists: {
          type: Number
        },
        totalChampionKills: {
          type: Number
        },
        totalDamageDealt: {
          type: Number
        },
        totalDamageTaken: {
          type: Number
        },
        totalDeathsPerSession: {
          type: Number
        },
        totalDoubleKills: {
          type: Number
        },
        totalFirstBlood: {
          type: Number
        },
        totalGoldEarned: {
          type: Number
        },
        totalHeal: {
          type: Number
        },
        totalMagicDamageDealt: {
          type: Number
        },
        totalMinionKills: {
          type: Number
        },
        totalNeutralMinionsKilled: {
          type: Number
        },
        totalNodeCapture: {
          type: Number
        },
        totalNodeNeutralize: {
          type: Number
        },
        totalPentaKills: {
          type: Number
        },
        totalPhysicalDamageDealt: {
          type: Number
        },
        totalQuadraKills: {
          type: Number
        },
        totalSessionsLost: {
          type: Number
        },
        totalSessionsPlayed: {
          type: Number
        },
        totalSessionsWon: {
          type: Number
        },
        totalTripleKills: {
          type: Number
        },
        totalTurretsKilled: {
          type: Number
        },
        totalUnrealKills: {
          type: Number
        }
      },
      losses: {
        type: Number
      },
      modifyDate: {
        type: Number
      },
      wins: {
        type: Number
      }
    },{
      playerStatSummaryType: {
        type: String
      },
      aggregatedStats: {
        averageAssists: {
          type: Number
        },
        averageChampionsKilled:{
          type: Number
        },
        averageCombatPlayerScore:{
          type: Number
        },
        averageNodeCapture: {
          type: Number
        },
        averageNodeCaptureAssist: {
          type: Number
        },
        averageNodeNeutralize: {
          type: Number
        },
        averageNodeNeutralizeAssist: {
          type: Number
        },
        averageNumDeaths: {
          type: Number
        },
        averageObjectivePlayerScore: {
          type: Number
        },
        averageTeamObjective: {
          type: Number
        },
        averageTotalPlayerScore: {
          type: Number
        },
        botGamesPlayed: {
          type: Number
        },
        killingSpree: {
          type: Number
        },
        maxAssists: {
          type: Number
        },
        maxChampionsKilled: {
          type: Number
        },
        maxCombatPlayerScore: {
          type: Number
        },
        maxLargestCriticalStrike: {
          type: Number
        },
        maxLargestKillingSpree: {
          type: Number
        },
        maxNodeCapture: {
          type: Number
        },
        maxNodeCaptureAssist: {
          type: Number
        },
        maxNodeNeutralize: {
          type: Number
        },
        maxNodeNeutralizeAssist: {
          type: Number
        },
        maxNumDeaths: {
          type: Number
        },
        maxObjectivePlayerScore: {
          type: Number
        },
        maxTeamObjective: {
          type: Number
        },
        maxTimePlayed: {
          type: Number
        },
        maxTimeSpentLiving: {
          type: Number
        },
        maxTotalPlayerScore: {
          type: Number
        },
        mostChampionKillsPerSession: {
          type: Number
        },
        mostSpellsCast: {
          type: Number
        },
        normalGamesPlayed: {
          type: Number
        },
        rankedPremadeGamesPlayed: {
          type: Number
        },
        rankedSoloGamesPlayed: {
          type: Number
        },
        totalAssists: {
          type: Number
        },
        totalChampionKills: {
          type: Number
        },
        totalDamageDealt: {
          type: Number
        },
        totalDamageTaken: {
          type: Number
        },
        totalDeathsPerSession: {
          type: Number
        },
        totalDoubleKills: {
          type: Number
        },
        totalFirstBlood: {
          type: Number
        },
        totalGoldEarned: {
          type: Number
        },
        totalHeal: {
          type: Number
        },
        totalMagicDamageDealt: {
          type: Number
        },
        totalMinionKills: {
          type: Number
        },
        totalNeutralMinionsKilled: {
          type: Number
        },
        totalNodeCapture: {
          type: Number
        },
        totalNodeNeutralize: {
          type: Number
        },
        totalPentaKills: {
          type: Number
        },
        totalPhysicalDamageDealt: {
          type: Number
        },
        totalQuadraKills: {
          type: Number
        },
        totalSessionsLost: {
          type: Number
        },
        totalSessionsPlayed: {
          type: Number
        },
        totalSessionsWon: {
          type: Number
        },
        totalTripleKills: {
          type: Number
        },
        totalTurretsKilled: {
          type: Number
        },
        totalUnrealKills: {
          type: Number
        }
      },
      losses: {
        type: Number
      },
      modifyDate: {
        type: Number
      },
      wins: {
        type: Number
      }
    },{
      playerStatSummaryType: {
        type: String
      },
      aggregatedStats: {
        averageAssists: {
          type: Number
        },
        averageChampionsKilled:{
          type: Number
        },
        averageCombatPlayerScore:{
          type: Number
        },
        averageNodeCapture: {
          type: Number
        },
        averageNodeCaptureAssist: {
          type: Number
        },
        averageNodeNeutralize: {
          type: Number
        },
        averageNodeNeutralizeAssist: {
          type: Number
        },
        averageNumDeaths: {
          type: Number
        },
        averageObjectivePlayerScore: {
          type: Number
        },
        averageTeamObjective: {
          type: Number
        },
        averageTotalPlayerScore: {
          type: Number
        },
        botGamesPlayed: {
          type: Number
        },
        killingSpree: {
          type: Number
        },
        maxAssists: {
          type: Number
        },
        maxChampionsKilled: {
          type: Number
        },
        maxCombatPlayerScore: {
          type: Number
        },
        maxLargestCriticalStrike: {
          type: Number
        },
        maxLargestKillingSpree: {
          type: Number
        },
        maxNodeCapture: {
          type: Number
        },
        maxNodeCaptureAssist: {
          type: Number
        },
        maxNodeNeutralize: {
          type: Number
        },
        maxNodeNeutralizeAssist: {
          type: Number
        },
        maxNumDeaths: {
          type: Number
        },
        maxObjectivePlayerScore: {
          type: Number
        },
        maxTeamObjective: {
          type: Number
        },
        maxTimePlayed: {
          type: Number
        },
        maxTimeSpentLiving: {
          type: Number
        },
        maxTotalPlayerScore: {
          type: Number
        },
        mostChampionKillsPerSession: {
          type: Number
        },
        mostSpellsCast: {
          type: Number
        },
        normalGamesPlayed: {
          type: Number
        },
        rankedPremadeGamesPlayed: {
          type: Number
        },
        rankedSoloGamesPlayed: {
          type: Number
        },
        totalAssists: {
          type: Number
        },
        totalChampionKills: {
          type: Number
        },
        totalDamageDealt: {
          type: Number
        },
        totalDamageTaken: {
          type: Number
        },
        totalDeathsPerSession: {
          type: Number
        },
        totalDoubleKills: {
          type: Number
        },
        totalFirstBlood: {
          type: Number
        },
        totalGoldEarned: {
          type: Number
        },
        totalHeal: {
          type: Number
        },
        totalMagicDamageDealt: {
          type: Number
        },
        totalMinionKills: {
          type: Number
        },
        totalNeutralMinionsKilled: {
          type: Number
        },
        totalNodeCapture: {
          type: Number
        },
        totalNodeNeutralize: {
          type: Number
        },
        totalPentaKills: {
          type: Number
        },
        totalPhysicalDamageDealt: {
          type: Number
        },
        totalQuadraKills: {
          type: Number
        },
        totalSessionsLost: {
          type: Number
        },
        totalSessionsPlayed: {
          type: Number
        },
        totalSessionsWon: {
          type: Number
        },
        totalTripleKills: {
          type: Number
        },
        totalTurretsKilled: {
          type: Number
        },
        totalUnrealKills: {
          type: Number
        }
      },
      losses: {
        type: Number
      },
      modifyDate: {
        type: Number
      },
      wins: {
        type: Number
      }
    },{
      playerStatSummaryType: {
        type: String
      },
      aggregatedStats: {
        averageAssists: {
          type: Number
        },
        averageChampionsKilled:{
          type: Number
        },
        averageCombatPlayerScore:{
          type: Number
        },
        averageNodeCapture: {
          type: Number
        },
        averageNodeCaptureAssist: {
          type: Number
        },
        averageNodeNeutralize: {
          type: Number
        },
        averageNodeNeutralizeAssist: {
          type: Number
        },
        averageNumDeaths: {
          type: Number
        },
        averageObjectivePlayerScore: {
          type: Number
        },
        averageTeamObjective: {
          type: Number
        },
        averageTotalPlayerScore: {
          type: Number
        },
        botGamesPlayed: {
          type: Number
        },
        killingSpree: {
          type: Number
        },
        maxAssists: {
          type: Number
        },
        maxChampionsKilled: {
          type: Number
        },
        maxCombatPlayerScore: {
          type: Number
        },
        maxLargestCriticalStrike: {
          type: Number
        },
        maxLargestKillingSpree: {
          type: Number
        },
        maxNodeCapture: {
          type: Number
        },
        maxNodeCaptureAssist: {
          type: Number
        },
        maxNodeNeutralize: {
          type: Number
        },
        maxNodeNeutralizeAssist: {
          type: Number
        },
        maxNumDeaths: {
          type: Number
        },
        maxObjectivePlayerScore: {
          type: Number
        },
        maxTeamObjective: {
          type: Number
        },
        maxTimePlayed: {
          type: Number
        },
        maxTimeSpentLiving: {
          type: Number
        },
        maxTotalPlayerScore: {
          type: Number
        },
        mostChampionKillsPerSession: {
          type: Number
        },
        mostSpellsCast: {
          type: Number
        },
        normalGamesPlayed: {
          type: Number
        },
        rankedPremadeGamesPlayed: {
          type: Number
        },
        rankedSoloGamesPlayed: {
          type: Number
        },
        totalAssists: {
          type: Number
        },
        totalChampionKills: {
          type: Number
        },
        totalDamageDealt: {
          type: Number
        },
        totalDamageTaken: {
          type: Number
        },
        totalDeathsPerSession: {
          type: Number
        },
        totalDoubleKills: {
          type: Number
        },
        totalFirstBlood: {
          type: Number
        },
        totalGoldEarned: {
          type: Number
        },
        totalHeal: {
          type: Number
        },
        totalMagicDamageDealt: {
          type: Number
        },
        totalMinionKills: {
          type: Number
        },
        totalNeutralMinionsKilled: {
          type: Number
        },
        totalNodeCapture: {
          type: Number
        },
        totalNodeNeutralize: {
          type: Number
        },
        totalPentaKills: {
          type: Number
        },
        totalPhysicalDamageDealt: {
          type: Number
        },
        totalQuadraKills: {
          type: Number
        },
        totalSessionsLost: {
          type: Number
        },
        totalSessionsPlayed: {
          type: Number
        },
        totalSessionsWon: {
          type: Number
        },
        totalTripleKills: {
          type: Number
        },
        totalTurretsKilled: {
          type: Number
        },
        totalUnrealKills: {
          type: Number
        }
      },
      losses: {
        type: Number
      },
      modifyDate: {
        type: Number
      },
      wins: {
        type: Number
      }
    },
  ],
  summonerId: {
    type: Number
  }
});

export default mongoose.model('Stats', statsSchema);
