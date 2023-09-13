# frozen_string_literal: true

# Review class 
class Review < ApplicationRecord
  validates :rating, presence: true
end
