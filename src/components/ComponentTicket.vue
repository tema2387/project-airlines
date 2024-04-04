<script>
export default {
  props: {
    ticket: Object,
  },
}
</script>

<template>
  <div class="ticket grid sm:grid-cols-5 grid-cols-1 bg-white shadow-xl rounded-xl relative overflow-hidden">
    <div class="ticket__left order-1 sm:col-span-2 flex flex-col gap-[20px] items-center sm:p-[25px] sm:border-r border-gray border-r-none p-[15px]">
      <div class="ticket__company flex-1 sm:text-xl text-lg">
        AIRLINES
      </div>
      <button class="ticket__buy rounded-xl p-[5px] w-[200px] bg-orange text-white text sm:text-xl whitespace-nowrap duration-200 hover:shadow-[inset_0px_1px_10px_rgba(0,0,0,0.3)] text-lg">
        Купить<br>за {{ ticket.price }}
      </button>
    </div>
    <div class="ticket__right -order-1 sm:order-1 sm:col-span-3 relative flex sm:gap-[100px] sm:p-[25px] p-[15px] gap-[50px]">
      <div class="ticket__departure">
        <div class="ticket__time sm:text-4xl mb-[15px] text-3xl">
          {{ ticket.departure_time }}
        </div>
        <div class="ticket__from sm:texl-md text-sm">
          {{ ticket.origin }}, {{ ticket.origin_name }}
        </div>
        <div class="ticket__date text-gray sm:text-sm text-xs">
          {{ ticket.departure_date }}
        </div>
      </div>
      <div class="ticket__transplant absolute left-1/2 translate-x-[-50%] text-gray after:content-[''] after:bg-plane after:w-[20px] after:h-[20px] after:absolute after:right-0 after:bottom-[-19px] before:content-[''] before:bg-gray before:w-[100%] before:h-[2px] before:absolute before:bottom-[-10px] sm:text-md text-sm">
        {{ 
          ticket.stops === 0 
            ? 'Без пересадок' 
            : ticket.stops === 1 
              ? '1 пересадка' 
              : ticket.stops === 2 
                ? '2 пересадки' 
                : ticket.stops === 3 
                  ? '3 пересадки' 
                  : ticket.stops 
        }}
      </div>
      <div class="ticket__arrival text-end">
        <div class="ticket__time sm:text-4xl mb-[15px] text-3xl">
          {{ ticket.arrival_time }}
        </div>
        <div class="ticket__from sm:text-md text-sm">
          {{ ticket.destination_name }}, {{ ticket.destination }}
        </div>
        <div class="ticket__date text-gray sm:text-sm text-xs">
          {{ ticket.arrival_date }}
        </div>
      </div>
    </div>
  </div>
</template>