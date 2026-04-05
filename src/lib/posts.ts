export interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: "cpu-scheduling",
    title: "현대 운영체제의 CPU 스케줄링과 선점형 멀티태스킹",
    date: "2026. 04. 05",
    category: "OS",
    excerpt: "멀티태스킹 환경에서 프로세스들이 CPU 자원을 어떻게 효율적으로 나누어 사용하는지, 그리고 선점형 스케줄러의 작동 원리를 깊이 있게 살펴봅니다.",
    content: `
      ## CPU 스케줄링의 본질
      현대 운영체제에서 CPU 스케줄링은 시스템의 전반적인 성능과 사용자 경험을 결정짓는 핵심 요소입니다. 커널의 스케줄러는 실행 대기 중인 프로세스들 사이에서 어떤 프로세스에게 CPU 소유권을 넘겨줄지 짧은 시간 간격으로 결정을 내립니다.

      ### 선점형 vs 비선점형
      비선점형(Non-preemptive) 방식에서는 프로세스가 스스로 CPU를 반납할 때까지 기다리지만, 선점형(Preemptive) 방식에서는 타이머 인터럽트를 통해 프로세스의 실행 권한을 강제로 회수할 수 있습니다. 

      ### 주요 알고리즘
      1. **Round Robin**: 시분할 시스템의 기초로, 정해진 시간 할당량(Time Quantum)만큼 실행합니다.
      2. **Multi-level Feedback Queue (MLFQ)**: 현대 OS(Windows, macOS, Linux)에서 가장 널리 쓰이며, 프로세스의 과거 행적을 바탕으로 동적으로 우선순위를 조정합니다.
    `
  },
  {
    slug: "cap-theorem",
    title: "분산 시스템에서의 일관성 모델과 CAP 정리의 재해석",
    date: "2026. 03. 28",
    category: "System",
    excerpt: "분산 데이터베이스 설계 시 마주치는 일관성(Consistency), 가용성(Availability), 분할 내성(Partition Tolerance)의 트레이드오프를 분석합니다.",
    content: `
      ## CAP 정리란 무엇인가?
      분산 컴퓨팅의 아버지라 불리는 Eric Brewer가 제안한 이 정리는 분산 시스템이 세 가지 속성 중 두 가지만을 동시에 완벽하게 만족할 수 있다는 원칙을 담고 있습니다.

      ### 속성 분석
      - **Consistency**: 모든 노드가 동시에 같은 데이터를 보아야 합니다.
      - **Availability**: 일부 노드에 장애가 발생해도 시스템은 응답해야 합니다.
      - **Partition Tolerance**: 노드 간 통신이 끊어져도 시스템은 동작해야 합니다.

      ### 실무에서의 선택
      실제로 네트워크 장애는 피할 수 없는 'P' 요소이므로, 우리는 현실적으로 CP 시스템(강력한 일관성)이나 AP 시스템(최종 가용성) 사이에서 비즈니스 요구사항에 맞는 선택을 내려야 합니다.
    `
  },
  {
    slug: "hash-table",
    title: "자료구조의 효율성: 해시 테이블의 충돌 해결 전략 비교",
    date: "2026. 03. 15",
    category: "Algorithm",
    excerpt: "평균 O(1)의 탐색 속도를 자랑하는 해시 테이블이 최악의 상황에서도 성능을 유지하기 위해 사용하는 체이닝과 개방 주소 지정 방식을 비교합니다.",
    content: `
      ## 해시 테이블과 성능
      해시 테이블은 키를 해시 함수를 통해 인덱스로 변환하여 데이터를 저장합니다. 하지만 서로 다른 키가 같은 인덱스로 변환되는 '충돌(Collision)'은 불가피합니다.

      ### 충돌 해결 전략
      1. **Chaining**: 같은 인덱스에 연결 리스트를 사용하여 데이터를 체인처럼 엮습니다. 구현이 간단하지만 메모리 오버헤드가 발생할 수 있습니다.
      2. **Open Addressing**: 충돌 발생 시 다른 빈 버킷을 찾아 데이터를 저장합니다. Linear Probing, Quadratic Probing 등이 있으며 클러스터링 문제가 발생할 수 있습니다.
    `
  },
  {
    slug: "compiler-optimization",
    title: "컴파일러 최적화 기법: 인라이닝과 루프 언롤링의 원리",
    date: "2026. 03. 02",
    category: "Compiler",
    excerpt: "고수준 언어로 작성된 코드가 기계어로 번역되는 과정에서 성능을 극대화하기 위해 수행되는 다양한 정적 최적화 기법의 내부 작동 방식을 탐구합니다.",
    content: `
      ## 최적화의 예술
      컴파일러는 프로그래머가 작성한 코드의 의미를 보존하면서도 더 빠른 기계어 코드를 생성하기 위해 복잡한 분석 과정을 거칩니다.

      ### 핵심 최적화 기법
      - **Inlining**: 함수 호출 오버헤드를 줄이기 위해 함수 호출부를 실제 본문으로 대체합니다.
      - **Loop Unrolling**: 반복문의 조건을 검사하는 횟수를 줄여 파이프라인 효율을 높입니다.
      - **Dead Code Elimination**: 실행 경로에 도달하지 않거나 결과가 쓰이지 않는 불필요한 코드를 제거합니다.
    `
  }
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
