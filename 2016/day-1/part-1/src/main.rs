use std::fs;

enum Direction {
    North,
    East,
    South,
    West,
}

struct Point {
    x: i32,
    y: i32,
    direction: Direction,
}

fn main() {
    let mut position = Point {
        x: 0,
        y: 0,
        direction: Direction::North,
    };
    let instructions = fs::read_to_string("input.txt").expect("Error reading input.txt");

    for token in instructions.split(",").map(|s| s.trim()) {
        let steps: i32 = token[1..].parse().expect("Error parsing steps");
        match token.chars().nth(0).unwrap() {
            'R' => match position.direction {
                Direction::North => position.direction = Direction::East,
                Direction::East => position.direction = Direction::South,
                Direction::South => position.direction = Direction::West,
                Direction::West => position.direction = Direction::North,
            },
            'L' => match position.direction {
                Direction::North => position.direction = Direction::West,
                Direction::East => position.direction = Direction::North,
                Direction::South => position.direction = Direction::East,
                Direction::West => position.direction = Direction::South,
            },
            _ => panic!("Invalid instruction"),
        }
        match position.direction {
            Direction::North => position.y += steps,
            Direction::East => position.x += steps,
            Direction::South => position.y -= steps,
            Direction::West => position.x -= steps,
        }
    }
    println!("Distance: {}", position.x.abs() + position.y.abs());
}
