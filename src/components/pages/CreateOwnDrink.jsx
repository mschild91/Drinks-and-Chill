import { Input, Textarea, Button } from "@material-tailwind/react"
import React, { useEffect, useState } from "react"
import { Card, CardHeader, CardBody } from "@material-tailwind/react"

import formImageOne from "../../assets/img/form-image-1.png"
import formImageTwo from "../../assets/img/form-image-2.png"
import formImageThree from "../../assets/img/form-image-3.png"

const CreateOwnDrink = () => {
  const [ownDrink, setOwnDrink] = useState(null)
  const [ownDrinks, setOwnDrinks] = useState(() => {
    const ownDrinksStorage = JSON.parse(localStorage.getItem("ownDrinks"))
    return ownDrinksStorage ? ownDrinksStorage : []
  })

  const handleOwnDrink = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const userDrink = Object.fromEntries(formData)

    setOwnDrink(userDrink)
  }
  useEffect(() => {
    if (ownDrink) {
      const idDrink = crypto.randomUUID()
      setOwnDrinks((prevOwnDrinks) => [
        ...prevOwnDrinks,
        { ...ownDrink, idDrink },
      ])
    }
  }, [ownDrink])

  useEffect(() => {
    localStorage.setItem("ownDrinks", JSON.stringify(ownDrinks))
  }, [ownDrinks])

  return (
    <main className="bg-project-blue">
      {ownDrinks.length ? (
        <section className="bg-project-blue">
          {ownDrinks.map((drink) => {
            return (
              <article
                key={drink.idDrink}
                className="flex justify-center mb-8 bg-project-blue">
                <Card className="pt-10 text-black bg-gray-300 font-montserrat w-96 h-fit md:w-fit md:flex md:flex-row md:pb-6 md:pt-3 md:pl-8 md:pr-8">
                  <CardHeader
                    color="blue-gray"
                    className="w-64 h-64 md:mt-14">
                    <div>
                      <img
                        className="w-64 h-64"
                        src={drink.strDrinkThumb}
                        alt={drink.strDrink}
                      />
                    </div>
                  </CardHeader>
                  <CardBody>
                    <h1 className="pb-6 text-xl font-medium">
                      {drink.strDrink}
                    </h1>
                    <div className="pb-6">
                      <h3 className="text-lg font-medium">Ingredients:</h3>
                      <p>
                        {`${drink.strMeasure1}
                        ${drink.strIngredient1}`}
                      </p>
                      <p>
                        {`${drink.strMeasure2}
                        ${drink.strIngredient2}`}
                      </p>
                      <p>
                        {`${drink.strMeasure3}
                        ${drink.strIngredient3}`}
                      </p>
                    </div>
                    <div>
                      <p className="md:w-72 xl:w-96">{drink.strInstructions}</p>
                    </div>
                  </CardBody>
                </Card>
              </article>
            )
          })}
        </section>
      ) : (
        ""
      )}
      <section className="gap-24 pt-10 pb-10 bg-gray-300 text-project-blue xl:flex xl:justify-center">
        <div>
          <h1 className="pb-10 text-3xl text-center font-playfair xl:text-left xl:ml-32">
            Create your own Drinks!
          </h1>
          <form
            onSubmit={handleOwnDrink}
            className="flex flex-col gap-3 m-auto w-80 xl:ml-32">
            <Input
              name="strDrink"
              size="lg"
              label="Name"
              color="amber"
              required
            />
            <Input
              name="strCategory"
              size="lg"
              label="Category"
              color="amber"
              required
            />
            <Input
              name="strDrinkThumb"
              size="lg"
              label="Picture URL"
              color="amber"
              required
            />
            <Textarea
              className="placeholder:text-project-white"
              name="strInstructions"
              color="amber"
              label="Instructions"
              required
            />
            <Input
              name="strIngredient1"
              size="lg"
              label="Ingredient 1"
              color="amber"
              required
            />
            <Input
              name="strMeasure1"
              size="lg"
              label="Measure of Ingredient 1"
              color="amber"
              required
            />
            <Input
              name="strIngredient2"
              size="lg"
              label="Ingredient 2"
              color="amber"
            />
            <Input
              name="strMeasure2"
              size="lg"
              label="Measure of Ingredient 2"
              color="amber"
            />
            <Input
              name="strIngredient3"
              size="lg"
              label="Ingredient 3"
              color="amber"
            />
            <Input
              name="strMeasure3"
              size="lg"
              label="Measure of Ingredient 3"
              color="amber"
            />
            <div className="flex justify-center pt-4">
              <Button
                className="w-60"
                size="sm"
                type="submit"
                color={"orange"}>
                Submit
              </Button>
            </div>
          </form>
        </div>
        <div className="hidden xl:block xl:relative xl:w-full">
          <img
            src={formImageOne}
            alt=""
            className="absolute top-96 left-14 rounded-2xl"
          />
          <img
            src={formImageTwo}
            alt=""
            className="absolute top-20 left-80 rounded-2xl"
          />
          <img
            src={formImageThree}
            alt=""
            className="absolute top-36 left-4 rounded-2xl"
          />
        </div>
      </section>
    </main>
  )
}

export default CreateOwnDrink
