<script>
import ComponentTicket from './ComponentTicket.vue';
import ComponentTicketPlaceholder from './ComponentTicketPlaceholder.vue';

export default {
  components: {ComponentTicket,ComponentTicketPlaceholder},
  props: {
    tickets: Array,
  },
  data() {
    return {
      ticketsPlaceholder: [
        {
          "origin": "VVO",
          "origin_name": "Владивосток",
          "destination": "TLV",
          "destination_name": "Тель-Авив",
          "departure_date": "12.05.18",
          "departure_time": "16:20",
          "arrival_date": "12.05.18",
          "arrival_time": "22:10",
          "carrier": "TK",
          "stops": 3,
          "price": 12400
        },
        {
          "origin": "VVO",
          "origin_name": "Владивосток",
          "destination": "TLV",
          "destination_name": "Тель-Авив",
          "departure_date": "12.05.18",
          "departure_time": "16:20",
          "arrival_date": "12.05.18",
          "arrival_time": "22:10",
          "carrier": "TK",
          "stops": 3,
          "price": 12400
        },
        {
          "origin": "VVO",
          "origin_name": "Владивосток",
          "destination": "TLV",
          "destination_name": "Тель-Авив",
          "departure_date": "12.05.18",
          "departure_time": "16:20",
          "arrival_date": "12.05.18",
          "arrival_time": "22:10",
          "carrier": "TK",
          "stops": 3,
          "price": 12400
        },
      ]
    }
  }
}
</script>

<template>
  <div class="tickets flex flex-col gap-5">
    <component-ticket
      v-if="tickets.length" 
      v-for="ticket in tickets" 
      :ticket="ticket"
    />
    <component-ticket-placeholder 
      v-else
      v-for="ticketPlaceholder in ticketsPlaceholder" 
      :ticket="ticketPlaceholder" 
    />
  </div>
</template>