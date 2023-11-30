import * as React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

const NavigationMenuBar = () => (
  <NavigationMenu.Root>
    <NavigationMenu.List>
      {/* Item 1 */}
      <NavigationMenu.Item>
        <NavigationMenu.Trigger>Item 1</NavigationMenu.Trigger>
        <NavigationMenu.Content>
          <NavigationMenu.Link>Link 1</NavigationMenu.Link>
        </NavigationMenu.Content>
      </NavigationMenu.Item>

      {/* Item 2 */}
      <NavigationMenu.Item>
        <NavigationMenu.Trigger>Item 2</NavigationMenu.Trigger>
        <NavigationMenu.Content>
          <NavigationMenu.Link>Link 2</NavigationMenu.Link>
        </NavigationMenu.Content>
      </NavigationMenu.Item>

      {/* Item 3 */}
      <NavigationMenu.Item>
        <NavigationMenu.Trigger>Item 3</NavigationMenu.Trigger>
        <NavigationMenu.Content>
          <NavigationMenu.Link>Link 3</NavigationMenu.Link>
        </NavigationMenu.Content>
      </NavigationMenu.Item>

      {/* Item 4 */}
      <NavigationMenu.Item>
        <NavigationMenu.Trigger>Item 4</NavigationMenu.Trigger>
        <NavigationMenu.Content>
          <NavigationMenu.Link>Link 4</NavigationMenu.Link>
        </NavigationMenu.Content>
      </NavigationMenu.Item>

      <NavigationMenu.Indicator />
    </NavigationMenu.List>

    {/* Responsive Hamburger Menu */}
    <NavigationMenu.Viewport>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>☰ Menu</NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <NavigationMenu.Sub>
              <NavigationMenu.List>
                {/* Responsive Dropdown for Item 1 */}
                <NavigationMenu.Item>
                  <NavigationMenu.Link>Link 1</NavigationMenu.Link>
                </NavigationMenu.Item>
                {/* Responsive Dropdown for Item 2 */}
                <NavigationMenu.Item>
                  <NavigationMenu.Link>Link 2</NavigationMenu.Link>
                </NavigationMenu.Item>
              </NavigationMenu.List>
            </NavigationMenu.Sub>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Viewport>
  </NavigationMenu.Root>
);

export default NavigationMenuBar;
