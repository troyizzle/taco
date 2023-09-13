require 'swagger_helper'

RSpec.describe 'api/v1/reviews', type: :request do
  path '/api/v1/reviews' do
    get 'Gets all reviews' do
      tags 'Reviews'
      consumes 'application/json'
      produces 'application/json'

      response '200', 'All' do
        schema type: :array,
               items: {
                 type: :object,
                 properties: {
                   id: { type: :integer },
                   name: { type: :string },
                   review: { type: :number, format: :float },
                   created_at: { type: :string, format: :date_time },
                   updated_at: { type: :string, format: :date_time }
                 }
               }

        let(:review) { { name: 'Steak Taco', rating: 5.0 } }
        let(:review2) { { name: 'Chicken Taco', rating: 4 } }
        run_test!
      end
    end

    post 'Creates a review' do
      tags 'Reviews'
      consumes 'application/json'
      produces 'application/json'
      security [Bearer: {}]

      parameter name: :review, in: :body, schema: {
        type: :object,
        properties: {
          name: { type: :string },
          review: { type: :number, format: :float }
        },
        required: %w[name review]
      }

      parameter name: 'Authorization', in: :header, type: :string

      response '201', 'review created' do
        schema type: :object,
               properties: {
                 id: { type: :integer },
                 name: { type: :string },
                 rating: { type: :number, format: :float }
               }

        let(:review) { { name: 'Steak Taco', rating: 5.0 } }
        run_test!
      end

      response '422', 'invalid request' do
        let(:review) { { name: 'Steak Taco' } }
        run_test!
      end
    end
  end
end
