/** @constructor */
ScalaJS.c.scala_collection_immutable_ListMap$Node = (function() {
  ScalaJS.c.scala_collection_immutable_ListMap.call(this);
  this.key$6 = null;
  this.value$6 = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_immutable_ListMap$Node.prototype = new ScalaJS.inheritable.scala_collection_immutable_ListMap();
ScalaJS.c.scala_collection_immutable_ListMap$Node.prototype.constructor = ScalaJS.c.scala_collection_immutable_ListMap$Node;
ScalaJS.c.scala_collection_immutable_ListMap$Node.prototype.key__O = (function() {
  return this.key$6
});
ScalaJS.c.scala_collection_immutable_ListMap$Node.prototype.value__O = (function() {
  return this.value$6
});
ScalaJS.c.scala_collection_immutable_ListMap$Node.prototype.size__I = (function() {
  return this.size0__p6__Lscala_collection_immutable_ListMap__I__I(this, 0)
});
ScalaJS.c.scala_collection_immutable_ListMap$Node.prototype.size0__p6__Lscala_collection_immutable_ListMap__I__I = (function(cur, acc) {
  var _$this = this;
  tailCallLoop: while (true) {
    if (cur.isEmpty__Z()) {
      return acc
    } else {
      var temp$cur = cur.tail__Lscala_collection_immutable_ListMap();
      var temp$acc = (acc + 1);
      cur = temp$cur;
      acc = temp$acc;
      continue tailCallLoop
    }
  }
});
ScalaJS.c.scala_collection_immutable_ListMap$Node.prototype.isEmpty__Z = (function() {
  return false
});
ScalaJS.c.scala_collection_immutable_ListMap$Node.prototype.apply__O__O = (function(k) {
  return this.apply0__p6__Lscala_collection_immutable_ListMap__O__O(this, k)
});
ScalaJS.c.scala_collection_immutable_ListMap$Node.prototype.apply0__p6__Lscala_collection_immutable_ListMap__O__O = (function(cur, k) {
  var _$this = this;
  tailCallLoop: while (true) {
    if (cur.isEmpty__Z()) {
      throw new ScalaJS.c.java_util_NoSuchElementException().init___T(("key not found: " + k))
    } else {
      if (ScalaJS.anyEqEq(k, cur.key__O())) {
        return cur.value__O()
      } else {
        cur = cur.tail__Lscala_collection_immutable_ListMap();
        continue tailCallLoop
      }
    }
  }
});
ScalaJS.c.scala_collection_immutable_ListMap$Node.prototype.get__O__Lscala_Option = (function(k) {
  return this.get0__p6__Lscala_collection_immutable_ListMap__O__Lscala_Option(this, k)
});
ScalaJS.c.scala_collection_immutable_ListMap$Node.prototype.get0__p6__Lscala_collection_immutable_ListMap__O__Lscala_Option = (function(cur, k) {
  var _$this = this;
  tailCallLoop: while (true) {
    if (ScalaJS.anyEqEq(k, cur.key__O())) {
      return new ScalaJS.c.scala_Some().init___O(cur.value__O())
    } else {
      if (cur.tail__Lscala_collection_immutable_ListMap().nonEmpty__Z()) {
        cur = cur.tail__Lscala_collection_immutable_ListMap();
        continue tailCallLoop
      } else {
        return ScalaJS.modules.scala_None()
      }
    }
  }
});
ScalaJS.c.scala_collection_immutable_ListMap$Node.prototype.updated__O__O__Lscala_collection_immutable_ListMap = (function(k, v) {
  if (this.contains__O__Z(k)) {
    var m = this.$$minus__O__Lscala_collection_immutable_ListMap(k)
  } else {
    var m = this
  };
  return new ScalaJS.c.scala_collection_immutable_ListMap$Node().init___Lscala_collection_immutable_ListMap__O__O(m, k, v)
});
ScalaJS.c.scala_collection_immutable_ListMap$Node.prototype.$$minus__O__Lscala_collection_immutable_ListMap = (function(k) {
  var cur = this;
  var lst = ScalaJS.modules.scala_collection_immutable_Nil();
  while (cur.nonEmpty__Z()) {
    if ((!ScalaJS.anyEqEq(k, cur.key__O()))) {
      lst = lst.$$colon$colon__O__Lscala_collection_immutable_List(new ScalaJS.c.scala_Tuple2().init___O__O(cur.key__O(), cur.value__O()))
    };
    cur = cur.tail__Lscala_collection_immutable_ListMap()
  };
  var acc = ScalaJS.as.scala_collection_immutable_ListMap(ScalaJS.modules.scala_collection_immutable_ListMap().apply__Lscala_collection_Seq__Lscala_collection_GenMap(ScalaJS.modules.scala_collection_immutable_Nil()));
  while ((!ScalaJS.anyRefEqEq(lst, ScalaJS.modules.scala_collection_immutable_Nil()))) {
    var elem = ScalaJS.as.scala_Tuple2(lst.head__O());
    var stbl = acc;
    acc = new ScalaJS.c.scala_collection_immutable_ListMap$Node().init___Lscala_collection_immutable_ListMap__O__O(stbl, elem.$$und1__O(), elem.$$und2__O());
    lst = ScalaJS.as.scala_collection_immutable_List(lst.tail__O())
  };
  return acc
});
ScalaJS.c.scala_collection_immutable_ListMap$Node.prototype.tail__Lscala_collection_immutable_ListMap = (function() {
  return this.scala$collection$immutable$ListMap$Node$$$outer__Lscala_collection_immutable_ListMap()
});
ScalaJS.c.scala_collection_immutable_ListMap$Node.prototype.scala$collection$immutable$ListMap$Node$$$outer__Lscala_collection_immutable_ListMap = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_immutable_ListMap$Node.prototype.tail__O = (function() {
  return this.tail__Lscala_collection_immutable_ListMap()
});
ScalaJS.c.scala_collection_immutable_ListMap$Node.prototype.$$minus__O__O = (function(key) {
  return this.$$minus__O__Lscala_collection_immutable_ListMap(key)
});
ScalaJS.c.scala_collection_immutable_ListMap$Node.prototype.$$minus__O__Lscala_collection_generic_Subtractable = (function(elem) {
  return this.$$minus__O__Lscala_collection_immutable_ListMap(elem)
});
ScalaJS.c.scala_collection_immutable_ListMap$Node.prototype.$$minus__O__Lscala_collection_Map = (function(key) {
  return this.$$minus__O__Lscala_collection_immutable_ListMap(key)
});
ScalaJS.c.scala_collection_immutable_ListMap$Node.prototype.updated__O__O__Lscala_collection_GenMap = (function(key, value) {
  return this.updated__O__O__Lscala_collection_immutable_ListMap(key, value)
});
ScalaJS.c.scala_collection_immutable_ListMap$Node.prototype.updated__O__O__Lscala_collection_Map = (function(key, value) {
  return this.updated__O__O__Lscala_collection_immutable_ListMap(key, value)
});
ScalaJS.c.scala_collection_immutable_ListMap$Node.prototype.updated__O__O__Lscala_collection_immutable_Map = (function(key, value) {
  return this.updated__O__O__Lscala_collection_immutable_ListMap(key, value)
});
ScalaJS.c.scala_collection_immutable_ListMap$Node.prototype.init___Lscala_collection_immutable_ListMap__O__O = (function($$outer, key, value) {
  this.key$6 = key;
  this.value$6 = value;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.scala_collection_immutable_ListMap.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_immutable_ListMap$Node.prototype.scala$collection$immutable$ListMap$Node$$$outer__ = (function() {
  return this.scala$collection$immutable$ListMap$Node$$$outer__Lscala_collection_immutable_ListMap()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_ListMap$Node = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_ListMap$Node.prototype = ScalaJS.c.scala_collection_immutable_ListMap$Node.prototype;
ScalaJS.is.scala_collection_immutable_ListMap$Node = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_ListMap$Node)))
});
ScalaJS.as.scala_collection_immutable_ListMap$Node = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_ListMap$Node(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.ListMap$Node")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_ListMap$Node = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_ListMap$Node)))
});
ScalaJS.asArrayOf.scala_collection_immutable_ListMap$Node = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_ListMap$Node(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.ListMap$Node;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_ListMap$Node = new ScalaJS.ClassTypeData({
  scala_collection_immutable_ListMap$Node: 0
}, false, "scala.collection.immutable.ListMap$Node", ScalaJS.data.scala_collection_immutable_ListMap, {
  scala_collection_immutable_ListMap$Node: 1,
  scala_collection_immutable_ListMap: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_immutable_AbstractMap: 1,
  scala_collection_immutable_Map: 1,
  scala_collection_immutable_MapLike: 1,
  scala_collection_immutable_Iterable: 1,
  scala_collection_immutable_Traversable: 1,
  scala_Immutable: 1,
  scala_collection_AbstractMap: 1,
  scala_collection_Map: 1,
  scala_collection_MapLike: 1,
  scala_collection_generic_Subtractable: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  scala_collection_GenMap: 1,
  scala_collection_GenMapLike: 1,
  scala_collection_AbstractIterable: 1,
  scala_collection_Iterable: 1,
  scala_collection_IterableLike: 1,
  scala_Equals: 1,
  scala_collection_GenIterable: 1,
  scala_collection_GenIterableLike: 1,
  scala_collection_AbstractTraversable: 1,
  scala_collection_Traversable: 1,
  scala_collection_GenTraversable: 1,
  scala_collection_generic_GenericTraversableTemplate: 1,
  scala_collection_TraversableLike: 1,
  scala_collection_GenTraversableLike: 1,
  scala_collection_Parallelizable: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  scala_collection_generic_FilterMonadic: 1,
  scala_collection_generic_HasNewBuilder: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_ListMap$Node.prototype.$classData = ScalaJS.data.scala_collection_immutable_ListMap$Node;
//@ sourceMappingURL=ListMap$Node.js.map
