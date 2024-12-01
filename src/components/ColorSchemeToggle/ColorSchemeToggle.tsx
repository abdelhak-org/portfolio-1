import { Button, Group, useMantineColorScheme } from '@mantine/core';

export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  return (
    <Group justify="center" mt="xl">
      {colorScheme === 'dark' ? (
        <Button 
        style={{
          backgroundColor:'#ffffff',
          color: 'black'
          
        }}
        onClick={() => setColorScheme('light')}>light</Button>
      ) : (
        <Button 
        style={{
          backgroundColor:'black'
        }}
        
        onClick={() => setColorScheme('dark')}>Dark</Button>
      )}
    </Group>
  );
}
