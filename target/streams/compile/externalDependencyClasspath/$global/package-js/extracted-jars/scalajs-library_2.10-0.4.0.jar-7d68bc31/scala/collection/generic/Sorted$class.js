ScalaJS.impls.scala_collection_generic_Sorted$class__compare__Lscala_collection_generic_Sorted__O__O__I = (function($$this, k0, k1) {
  return $$this.ordering__Lscala_math_Ordering().compare__O__O__I(k0, k1)
});
ScalaJS.impls.scala_collection_generic_Sorted$class__from__Lscala_collection_generic_Sorted__O__Lscala_collection_generic_Sorted = (function($$this, from) {
  return $$this.rangeImpl__Lscala_Option__Lscala_Option__Lscala_collection_generic_Sorted(new ScalaJS.c.scala_Some().init___O(from), ScalaJS.modules.scala_None())
});
ScalaJS.impls.scala_collection_generic_Sorted$class__until__Lscala_collection_generic_Sorted__O__Lscala_collection_generic_Sorted = (function($$this, until) {
  return $$this.rangeImpl__Lscala_Option__Lscala_Option__Lscala_collection_generic_Sorted(ScalaJS.modules.scala_None(), new ScalaJS.c.scala_Some().init___O(until))
});
ScalaJS.impls.scala_collection_generic_Sorted$class__range__Lscala_collection_generic_Sorted__O__O__Lscala_collection_generic_Sorted = (function($$this, from, until) {
  return $$this.rangeImpl__Lscala_Option__Lscala_Option__Lscala_collection_generic_Sorted(new ScalaJS.c.scala_Some().init___O(from), new ScalaJS.c.scala_Some().init___O(until))
});
ScalaJS.impls.scala_collection_generic_Sorted$class__to__Lscala_collection_generic_Sorted__O__Lscala_collection_generic_Sorted = (function($$this, to) {
  var i = $$this.keySet__Lscala_collection_SortedSet().from__O__Lscala_collection_SortedSet(to).iterator__Lscala_collection_Iterator();
  if (i.isEmpty__Z()) {
    return $$this.repr__Lscala_collection_generic_Sorted()
  };
  var next = i.next__O();
  if (($$this.compare__O__O__I(next, to) === 0)) {
    if (i.isEmpty__Z()) {
      return $$this.repr__Lscala_collection_generic_Sorted()
    } else {
      return $$this.until__O__Lscala_collection_generic_Sorted(i.next__O())
    }
  } else {
    return $$this.until__O__Lscala_collection_generic_Sorted(next)
  }
});
ScalaJS.impls.scala_collection_generic_Sorted$class__hasAll__Lscala_collection_generic_Sorted__Lscala_collection_Iterator__Z = (function($$this, j) {
  var i = $$this.keySet__Lscala_collection_SortedSet().iterator__Lscala_collection_Iterator();
  if (i.isEmpty__Z()) {
    return j.isEmpty__Z()
  };
  var in$2 = i.next__O();
  while (j.hasNext__Z()) {
    var jn = j.next__O();
    while (true) {
      var n = $$this.compare__O__O__I(jn, in$2);
      if ((n === 0)) {
        var jsx$1 = false
      } else {
        if ((n < 0)) {
          return false
        } else {
          if ((!i.hasNext__Z())) {
            return false
          } else {
            var jsx$1 = true
          }
        }
      };
      if (jsx$1) {
        in$2 = i.next__O()
      } else {
        break
      }
    }
  };
  return true
});
ScalaJS.impls.scala_collection_generic_Sorted$class__$init$__Lscala_collection_generic_Sorted__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=Sorted$class.js.map
