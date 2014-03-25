/** @constructor */
ScalaJS.c.scala_collection_immutable_ListSet$Node = (function() {
  ScalaJS.c.scala_collection_immutable_ListSet.call(this);
  this.head$5 = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_immutable_ListSet$Node.prototype = new ScalaJS.inheritable.scala_collection_immutable_ListSet();
ScalaJS.c.scala_collection_immutable_ListSet$Node.prototype.constructor = ScalaJS.c.scala_collection_immutable_ListSet$Node;
ScalaJS.c.scala_collection_immutable_ListSet$Node.prototype.head__O = (function() {
  return this.head$5
});
ScalaJS.c.scala_collection_immutable_ListSet$Node.prototype.scala$collection$immutable$ListSet$$unchecked$undouter__Lscala_collection_immutable_ListSet = (function() {
  return this.scala$collection$immutable$ListSet$Node$$$outer__Lscala_collection_immutable_ListSet()
});
ScalaJS.c.scala_collection_immutable_ListSet$Node.prototype.size__I = (function() {
  return this.sizeInternal__p5__Lscala_collection_immutable_ListSet__I__I(this, 0)
});
ScalaJS.c.scala_collection_immutable_ListSet$Node.prototype.sizeInternal__p5__Lscala_collection_immutable_ListSet__I__I = (function(n, acc) {
  var _$this = this;
  tailCallLoop: while (true) {
    if (n.isEmpty__Z()) {
      return acc
    } else {
      var temp$n = n.scala$collection$immutable$ListSet$$unchecked$undouter__Lscala_collection_immutable_ListSet();
      var temp$acc = (acc + 1);
      n = temp$n;
      acc = temp$acc;
      continue tailCallLoop
    }
  }
});
ScalaJS.c.scala_collection_immutable_ListSet$Node.prototype.isEmpty__Z = (function() {
  return false
});
ScalaJS.c.scala_collection_immutable_ListSet$Node.prototype.contains__O__Z = (function(e) {
  return this.containsInternal__p5__Lscala_collection_immutable_ListSet__O__Z(this, e)
});
ScalaJS.c.scala_collection_immutable_ListSet$Node.prototype.containsInternal__p5__Lscala_collection_immutable_ListSet__O__Z = (function(n, e) {
  var _$this = this;
  tailCallLoop: while (true) {
    if ((!n.isEmpty__Z())) {
      if (ScalaJS.anyEqEq(n.head__O(), e)) {
        return true
      } else {
        n = n.scala$collection$immutable$ListSet$$unchecked$undouter__Lscala_collection_immutable_ListSet();
        continue tailCallLoop
      }
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_collection_immutable_ListSet$Node.prototype.$$plus__O__Lscala_collection_immutable_ListSet = (function(e) {
  if (this.contains__O__Z(e)) {
    return this
  } else {
    return new ScalaJS.c.scala_collection_immutable_ListSet$Node().init___Lscala_collection_immutable_ListSet__O(this, e)
  }
});
ScalaJS.c.scala_collection_immutable_ListSet$Node.prototype.$$minus__O__Lscala_collection_immutable_ListSet = (function(e) {
  if (ScalaJS.anyEqEq(e, this.head__O())) {
    return this.scala$collection$immutable$ListSet$Node$$$outer__Lscala_collection_immutable_ListSet()
  } else {
    var tail = this.scala$collection$immutable$ListSet$Node$$$outer__Lscala_collection_immutable_ListSet().$$minus__O__Lscala_collection_immutable_ListSet(e);
    return new ScalaJS.c.scala_collection_immutable_ListSet$Node().init___Lscala_collection_immutable_ListSet__O(tail, this.head__O())
  }
});
ScalaJS.c.scala_collection_immutable_ListSet$Node.prototype.tail__Lscala_collection_immutable_ListSet = (function() {
  return this.scala$collection$immutable$ListSet$Node$$$outer__Lscala_collection_immutable_ListSet()
});
ScalaJS.c.scala_collection_immutable_ListSet$Node.prototype.scala$collection$immutable$ListSet$Node$$$outer__Lscala_collection_immutable_ListSet = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_immutable_ListSet$Node.prototype.tail__O = (function() {
  return this.tail__Lscala_collection_immutable_ListSet()
});
ScalaJS.c.scala_collection_immutable_ListSet$Node.prototype.$$minus__O__O = (function(elem) {
  return this.$$minus__O__Lscala_collection_immutable_ListSet(elem)
});
ScalaJS.c.scala_collection_immutable_ListSet$Node.prototype.$$minus__O__Lscala_collection_generic_Subtractable = (function(elem) {
  return this.$$minus__O__Lscala_collection_immutable_ListSet(elem)
});
ScalaJS.c.scala_collection_immutable_ListSet$Node.prototype.$$minus__O__Lscala_collection_Set = (function(elem) {
  return this.$$minus__O__Lscala_collection_immutable_ListSet(elem)
});
ScalaJS.c.scala_collection_immutable_ListSet$Node.prototype.$$plus__O__O = (function(elem) {
  return this.$$plus__O__Lscala_collection_immutable_ListSet(elem)
});
ScalaJS.c.scala_collection_immutable_ListSet$Node.prototype.$$plus__O__Lscala_collection_Set = (function(elem) {
  return this.$$plus__O__Lscala_collection_immutable_ListSet(elem)
});
ScalaJS.c.scala_collection_immutable_ListSet$Node.prototype.init___Lscala_collection_immutable_ListSet__O = (function($$outer, head) {
  this.head$5 = head;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.scala_collection_immutable_ListSet.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_immutable_ListSet$Node.prototype.scala$collection$immutable$ListSet$Node$$$outer__ = (function() {
  return this.scala$collection$immutable$ListSet$Node$$$outer__Lscala_collection_immutable_ListSet()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_ListSet$Node = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_ListSet$Node.prototype = ScalaJS.c.scala_collection_immutable_ListSet$Node.prototype;
ScalaJS.is.scala_collection_immutable_ListSet$Node = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_ListSet$Node)))
});
ScalaJS.as.scala_collection_immutable_ListSet$Node = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_ListSet$Node(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.ListSet$Node")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_ListSet$Node = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_ListSet$Node)))
});
ScalaJS.asArrayOf.scala_collection_immutable_ListSet$Node = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_ListSet$Node(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.ListSet$Node;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_ListSet$Node = new ScalaJS.ClassTypeData({
  scala_collection_immutable_ListSet$Node: 0
}, false, "scala.collection.immutable.ListSet$Node", ScalaJS.data.scala_collection_immutable_ListSet, {
  scala_collection_immutable_ListSet$Node: 1,
  scala_collection_immutable_ListSet: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_immutable_Set: 1,
  scala_collection_immutable_Iterable: 1,
  scala_collection_immutable_Traversable: 1,
  scala_Immutable: 1,
  scala_collection_AbstractSet: 1,
  scala_collection_Set: 1,
  scala_collection_SetLike: 1,
  scala_collection_generic_Subtractable: 1,
  scala_collection_GenSet: 1,
  scala_collection_generic_GenericSetTemplate: 1,
  scala_collection_GenSetLike: 1,
  scala_Function1: 1,
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
ScalaJS.c.scala_collection_immutable_ListSet$Node.prototype.$classData = ScalaJS.data.scala_collection_immutable_ListSet$Node;
//@ sourceMappingURL=ListSet$Node.js.map
