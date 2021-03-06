<template>
  <div>
    <v-container fluid>
      <!-- SEARCH BAR -->
      <v-layout justify-center align-center>
        <v-flex xs6>
          <v-text-field
            label="Search Table"
            v-model="searchValue"
            append-icon="mdi-magnify"
          ></v-text-field>
        </v-flex>
        <!-- Filtri -->
        <v-flex xs1>
          <v-menu :close-on-content-click="false" :nudge-width="200" left>
            <template v-slot:activator="{ on }">
              <v-btn color="primary" icon v-on="on">
                <v-icon dark>mdi-filter</v-icon>
              </v-btn>
            </template>

            <v-card class="filtri">
              <v-card-title class="subheading">Filter</v-card-title>
              <v-divider></v-divider>

              <v-card-text>
                <!-- Categorie -->
                <v-list-item-content>
                  <v-list-item-title>Select Filters</v-list-item-title>
                  <v-list-item-action v-for="f of selectFilters" :key="f.name">
                    <v-select
                      :label="f.label"
                      multiple
                      chips
                      v-model="f.model"
                      :items="f.items"
                    ></v-select>
                  </v-list-item-action>
                </v-list-item-content>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn color="accent" @click="clearFilters()">
                  <v-icon left>mdi-close</v-icon>
                  Clear Filters</v-btn
                >
                <v-btn color="primary" @click="saveFilters()">
                  <v-icon left>mdi-content-save</v-icon>
                  Set Filters
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </v-flex>
      </v-layout>
    </v-container>
    <v-data-table
      v-bind="$attrs"
      v-on="$listeners"
      :items="itemsFiltered"
      :headers="headers"
      :search="searchValueDebounced"
    >
      <!-- Pass on all named slots -->
      <slot v-for="slot in Object.keys($slots)" :name="slot" :slot="slot" />
      <!-- Pass on all scoped slots -->
      <template
        v-for="slot in Object.keys($scopedSlots)"
        :slot="slot"
        slot-scope="scope"
        ><slot :name="slot" v-bind="scope"
      /></template>
    </v-data-table>
  </div>
</template>

<script>
import FiltersHandler from "../helpers/filter";
import { debounce } from "./debounce";

export default {
  props: ["items", "headers"],
  data() {
    return {
      searchValue: "",
      searchValueDebounced: "",
      selectFilters: [],
      itemsFiltered: [],
      filterHandler: new FiltersHandler(),
    };
  },
  computed: {},
  watch: {
    searchValue: debounce(function (newVal) {
      this.searchValueDebounced = newVal;
      console.log("debouncing");
    }, 300),
    headers: {
      immediate: true,
      handler(newVal) {
        newVal
          .filter((h) => h.select_filter)
          .map((h) => {
            const fieldName = h.value;
            this.selectFilters.push({
              name: fieldName,
              model: [],
              label: "Select " + h.text,
              items: [],
            });
            this.filterHandler.registerFilter(fieldName);
          });
      },
    },
    items: {
      immediate: true,
      handler(newVal) {
        if (!Array.isArray(newVal)) {
          return;
        }
        const filters = this.selectFilters;
        newVal.map((item) => {
          filters.map((f) => {
            f.items.push(item[f.name]);
          });
        });
      },
    },
  },
  methods: {
    clearFilters() {
      this.itemsFiltered = this.items;
      this.selectFilters.map((f) => (f.model = null));
    },
    saveFilters() {
      this.selectFilters.map((f) => {
        this.filterHandler.updateFilterValue(f.name, f.model);
      });
      this.runFilters();
    },
    runFilters() {
      this.itemsFiltered = this.items.filter((item) =>
        this.filterHandler.runFilter(item)
      );
    },
  },
};
</script>
