enum Directions {
    North,
    East,
    South,
    West,
}

struct point {
    x: i32,
    y: i32,
    direction: Directions,
}

fn main() {
    let mut position = point {
        x: 0,
        y: 0,
        direction: Directions::North,
    };
    let instructions = std::fs::read_to_string("input.txt").expect("Error reading input.txt");

    // Find the first location visited twice
    let mut visited = std::collections::HashSet::new();
    visited.insert((0, 0));
    for token in instructions.split(",").map(|s| s.trim()) {
        let steps: i32 = token[1..].parse().expect("Error parsing steps");
        match token.chars().nth(0).unwrap() {
            'R' => match position.direction {
                Directions::North => position.direction = Directions::East,
                Directions::East => position.direction = Directions::South,
                Directions::South => position.direction = Directions::West,
                Directions::West => position.direction = Directions::North,
            },
            'L' => match position.direction {
                Directions::North => position.direction = Directions::West,
                Directions::East => position.direction = Directions::North,
                Directions::South => position.direction = Directions::East,
                Directions::West => position.direction = Directions::South,
            },
            _ => panic!("Invalid instruction"),
        }
        match position.direction {
            Directions::North => {
                for i in 1..=steps {
                    if visited.contains(&(position.x, position.y + i)) {
                        println!("Distance: {}", position.x.abs() + (position.y + i).abs());
                        return;
                    }
                    visited.insert((position.x, position.y + i));
                }
                position.y += steps;
            }
            Directions::East => {
                for i in 1..=steps {
                    if visited.contains(&(position.x + i, position.y)) {
                        println!("Distance: {}", (position.x + i).abs() + position.y.abs());
                        return;
                    }
                    visited.insert((position.x + i, position.y));
                }
                position.x += steps;
            }
            Directions::South => {
                for i in 1..=steps {
                    if visited.contains(&(position.x, position.y - i)) {
                        println!("Distance: {}", position.x.abs() + (position.y - i).abs());
                        return;
                    }
                    visited.insert((position.x, position.y - i));
                }
                position.y -= steps;
            }
            Directions::West => {
                for i in 1..=steps {
                    if visited.contains(&(position.x - i, position.y)) {
                        println!("Distance: {}", (position.x - i).abs() + position.y.abs());
                        return;
                    }
                    visited.insert((position.x - i, position.y));
                }
                position.x -= steps;
            }
        }
    }
}
