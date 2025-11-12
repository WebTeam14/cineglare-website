import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Amazing quality. Exceptional professionalism. Cineglare has become our go-to creative partner in Dubai.",
    author: "Sarah Thompson",
    position: "CEO of InnovateTech",
  },
  {
    quote: "From concept to stage, Cineglare made the Indian Community Conference in Qatar a memorable success. A dependable creative partner!",
    author: "Michael Carter",
    position: "Marketing Director",
  },
];

// const stats = [
//   { number: "132+", label: "Successful Projects" },
//   { number: "84+", label: "Celebrity Partnerships" },
//   { number: "4.9", label: "Client Rating" },
// ];

const Impact = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Impact We Create
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From brands to celebrities and production partners — trust fuels our collaborations. Excellence recognized. Here's how our clients describe their experience:
          </p>
        </div>

        {/* Stats */}
        <div className="mb-16 text-center bg-white">
          {/* {stats.map((stat, index) => ( */}
            <div className="bg-card border p-8 text-center">
              <p className="text-5xl md:text-6xl font-bold text-primary mb-2">4.9</p>
              <p className="text-muted-foreground">Client Rating</p>
            </div>
            
          {/* ))} */}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-8">
              <Quote className="w-10 h-10 text-primary mb-4" />
              <p className="text-lg text-foreground mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center space-x-4">
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
              <div className="flex items-center space-x-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
