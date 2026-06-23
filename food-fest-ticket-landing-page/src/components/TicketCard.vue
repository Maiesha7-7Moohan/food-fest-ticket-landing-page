<template>
  <div class="ticket-card" :class="{ featured: ticket.featured }">
    <div class="card-header">
      <h3 class="tier-name">{{ ticket.name }}</h3>
      <button
        class="favourite-btn"
        @click="toggleFavourite"
        :class="{ active: ticket.isFavourite }"
      >
        <span v-if="ticket.isFavourite">♥</span>
        <span v-else>♡</span>
      </button>
    </div>

    <div v-if="ticket.featured" class="featured-badge">Featured</div>

    <div class="price-section">
      <span class="currency">R</span>
      <span class="price">{{ ticket.price }}</span>
      <span class="period">/ticket</span>
    </div>

    <p class="description">{{ ticket.description }}</p>

    <ul class="benefits">
      <li v-for="(benefit, index) in ticket.benefits" :key="index">
        <span class="check-mark">✓</span>
        {{ benefit }}
      </li>
    </ul>

    <button class="cta-button">Buy Now</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  ticket: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["toggle-favourite"]);

const toggleFavourite = () => {
  emit("toggle-favourite", props.ticket.id);
};
</script>

<style scoped>
.ticket-card {
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.ticket-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
  transform: translateY(-4px);
}

.ticket-card.featured {
  border-color: #ff6b35;
  border-width: 3px;
  background: linear-gradient(
    135deg,
    rgba(255, 107, 53, 0.05) 0%,
    rgba(255, 107, 53, 0.02) 100%
  );
}

.featured-badge {
  position: absolute;
  top: -12px;
  right: 20px;
  background: #ff6b35;
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.tier-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin: 0;
}

.favourite-btn {
  background: none;
  border: 2px solid #ddd;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.favourite-btn:hover {
  border-color: #ff6b35;
  background-color: rgba(255, 107, 53, 0.05);
}

.favourite-btn.active {
  border-color: #ff6b35;
  color: #ff6b35;
  background-color: rgba(255, 107, 53, 0.1);
}

.price-section {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.currency {
  font-size: 1rem;
  color: #666;
}

.price {
  font-size: 2.5rem;
  font-weight: 700;
  color: #ff6b35;
}

.period {
  font-size: 0.9rem;
  color: #999;
}

.description {
  color: #666;
  font-size: 0.95rem;
  margin: 1rem 0;
  min-height: 2rem;
}

.benefits {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  flex-grow: 1;
}

.benefits li {
  padding: 0.6rem 0;
  color: #555;
  font-size: 0.95rem;
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
}

.check-mark {
  color: #ff6b35;
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 2px;
}

.cta-button {
  background: #ff6b35;
  color: white;
  border: none;
  padding: 0.9rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.cta-button:hover {
  background: #e5592c;
  transform: scale(1.02);
}

.cta-button:active {
  transform: scale(0.98);
}

@media (max-width: 768px) {
  .ticket-card {
    padding: 1.5rem;
  }

  .tier-name {
    font-size: 1.3rem;
  }

  .price {
    font-size: 2rem;
  }

  .benefits li {
    font-size: 0.9rem;
  }
}
</style>
