<template>
    <div class="card fight-form">
        <div class="card-header text-light bg-primary">Combat</div>
        <div class="card-body">
            <div class="row">
                <div class="col">
                    Round : {{ fight.round }}
                    Action : {{ fight.action }}
                </div>
            </div>
            <!--
            <div>
                Dons utiles :
                <span class="talent" v-for="talent in talents" :key="talent.name">{{ talent.name }} : {{ talent.value }}</span>
            </div>
            <div>
                Fiel : bonus : <select></select> D10
            </div>
            <div>
                Actions : malus : <select></select> D10
                <select></select> actions effectuées
            </div>
            -->
            <div class="row">
                <div class="col-1">
                Attaque
                </div>
                <div class="col-5">
                    <ul>
                        <li class="action">Armes naturelles <button class="btn btn-primary" @click="doAction">attaquer</button></li>
                        <li class="action">Mêlée <button class="btn btn-primary" @click="doAction">attaquer</button></li>
                        <li class="action">Armes de jet <button class="btn btn-primary" @click="doAction">attaquer</button></li>
                        <li class="action">Armes de trait <button class="btn btn-primary" @click="doAction">attaquer</button></li>
                    </ul>
                </div>
                <div class="col-1">
                    Défense
                </div>
                <div class="col-5">
                    <ul>
                        <li><label><input type="checkbox"> Option défensive</label></li>
                        <li><span class="action">Mêlée (soutien esquive) <button class="btn btn-primary" @click="doAction">attaquer</button></span></li>
                        <li><span class="action">Esquive <button class="btn btn-primary" @click="doAction">attaquer</button></span></li>
                        <li><span class="action">Esquive (soutien bouclier) <button class="btn btn-primary" @click="doAction">attaquer</button></span></li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-1">
                    Autres actions
                </div>
                <div class="col-11">
                    <button class="btn btn-primary" @click="doAction">Faire une autre action</button>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <button class="btn btn-lg btn-primary" @click="endRound">Finir le round</button>
                    <button class="btn btn-lg btn-primary" @click="endFight">Finir le combat</button>
                </div>
            </div>
        </div>
        <div class="card fight-history">
            <div class="card-header">Historique du combat</div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item text-success">Joueur attaque avec "Armes naturelles" réussite ([2, 2, 5])</li>
                    <li class="list-group-item text-danger">Joueur défend avec "Esquive" échec ([6, 6, 5])</li>
                    <li class="list-group-item text-info">Joueur annule une action</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      fight: {
        round: 1,
        action: 1,
      },
      // TODO: get this from character sheet.
      talents: [
        { name: "Bête intérieure", value: 1 },
        { name: "Chimérisme", value: 1 },
        { name: "Lion affamé", value: 1 },
        { name: "Griffes", value: 1 },
        { name: "Minéralité", value: 2 },
        { name: "Territoire", value: 1 },
      ]
    };
  },
  methods: {
      doAction() {
          this.fight.action++;
      },
      endRound() {
        this.fight.round++;
        this.fight.action = 1;
      },
      endFight() {
        this.fight = {
            round: 1,
            action: 1,
        }
      }
  }
};
</script>

<style scoped>
</style>
