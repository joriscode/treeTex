/** @constructor */
ScalaJS.c.scala_collection_mutable_ListMap = (function() {
  ScalaJS.c.scala_collection_mutable_AbstractMap.call(this);
  this.elems$5 = null;
  this.siz$5 = 0
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype = new ScalaJS.inheritable.scala_collection_mutable_AbstractMap();
ScalaJS.c.scala_collection_mutable_ListMap.prototype.constructor = ScalaJS.c.scala_collection_mutable_ListMap;
ScalaJS.c.scala_collection_mutable_ListMap.prototype.empty__Lscala_collection_mutable_ListMap = (function() {
  return ScalaJS.modules.scala_collection_mutable_ListMap().empty__Lscala_collection_mutable_ListMap()
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.elems__p5__Lscala_collection_immutable_List = (function() {
  return this.elems$5
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.elems$und$eq__p5__Lscala_collection_immutable_List__V = (function(x$1) {
  this.elems$5 = x$1
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.siz__p5__I = (function() {
  return this.siz$5
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.siz$und$eq__p5__I__V = (function(x$1) {
  this.siz$5 = x$1
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.get__O__Lscala_Option = (function(key) {
  return this.elems__p5__Lscala_collection_immutable_List().find__Lscala_Function1__Lscala_Option(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(key$1) {
    return (function(x$1) {
      return ScalaJS.bZ(ScalaJS.anyEqEq(x$1.$$und1__O(), key$1))
    })
  })(key))).map__Lscala_Function1__Lscala_Option(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$2) {
      return x$2.$$und2__O()
    })
  })()))
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.iterator__Lscala_collection_Iterator = (function() {
  return this.elems__p5__Lscala_collection_immutable_List().iterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_ListMap = (function(kv) {
  this.elems$und$eq__p5__Lscala_collection_immutable_List__V(this.remove__p5__O__Lscala_collection_immutable_List__Lscala_collection_immutable_List__Lscala_collection_immutable_List(kv.$$und1__O(), this.elems__p5__Lscala_collection_immutable_List(), ScalaJS.modules.scala_collection_immutable_Nil()));
  var x$3 = kv;
  var jsx$1 = this.elems__p5__Lscala_collection_immutable_List().$$colon$colon__O__Lscala_collection_immutable_List(x$3);
  this.elems$und$eq__p5__Lscala_collection_immutable_List__V(jsx$1);
  this.siz$und$eq__p5__I__V((this.siz__p5__I() + 1));
  return this
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.$$minus$eq__O__Lscala_collection_mutable_ListMap = (function(key) {
  this.elems$und$eq__p5__Lscala_collection_immutable_List__V(this.remove__p5__O__Lscala_collection_immutable_List__Lscala_collection_immutable_List__Lscala_collection_immutable_List(key, this.elems__p5__Lscala_collection_immutable_List(), ScalaJS.modules.scala_collection_immutable_Nil()));
  return this
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.remove__p5__O__Lscala_collection_immutable_List__Lscala_collection_immutable_List__Lscala_collection_immutable_List = (function(key, elems, acc) {
  var _$this = this;
  tailCallLoop: while (true) {
    if (elems.isEmpty__Z()) {
      return acc
    } else {
      if (ScalaJS.anyEqEq(ScalaJS.as.scala_Tuple2(elems.head__O()).$$und1__O(), key)) {
        _$this.siz$und$eq__p5__I__V((_$this.siz__p5__I() - 1));
        var x$4 = acc;
        return ScalaJS.as.scala_collection_immutable_List(elems.tail__O()).$$colon$colon$colon__Lscala_collection_immutable_List__Lscala_collection_immutable_List(x$4)
      } else {
        var temp$elems = ScalaJS.as.scala_collection_immutable_List(elems.tail__O());
        var x$5 = ScalaJS.as.scala_Tuple2(elems.head__O());
        var temp$acc = acc.$$colon$colon__O__Lscala_collection_immutable_List(x$5);
        elems = temp$elems;
        acc = temp$acc;
        continue tailCallLoop
      }
    }
  }
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.clear__V = (function() {
  this.elems$und$eq__p5__Lscala_collection_immutable_List__V(ScalaJS.modules.scala_collection_immutable_Nil());
  this.siz$und$eq__p5__I__V(0)
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.size__I = (function() {
  return this.siz__p5__I()
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.repr__Lscala_collection_generic_Subtractable = (function() {
  return ScalaJS.as.scala_collection_generic_Subtractable(this.repr__O())
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_IterableView(from, until)
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_IterableView()
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Iterable(repr)
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.filterNot__Lscala_Function1__O = (function(p) {
  return this.filterNot__Lscala_Function1__Lscala_collection_Map(p)
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.mapValues__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.mapValues__Lscala_Function1__Lscala_collection_Map(f)
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.filterKeys__Lscala_Function1__Lscala_collection_GenMap = (function(p) {
  return this.filterKeys__Lscala_Function1__Lscala_collection_Map(p)
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.values__Lscala_collection_GenIterable = (function() {
  return this.values__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.keys__Lscala_collection_GenIterable = (function() {
  return this.keys__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.keySet__Lscala_collection_GenSet = (function() {
  return this.keySet__Lscala_collection_Set()
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_Subtractable = (function(xs) {
  return this.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_Map(xs)
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_generic_Subtractable = (function(elem1, elem2, elems) {
  return this.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_mutable_Map(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.result__O = (function() {
  return this.result__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.clone__O = (function() {
  return this.clone__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.$$minus__O__O = (function(key) {
  return this.$$minus__O__Lscala_collection_mutable_Map(key)
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.$$minus__O__Lscala_collection_generic_Subtractable = (function(elem) {
  return this.$$minus__O__Lscala_collection_mutable_Map(elem)
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.$$minus__O__Lscala_collection_Map = (function(key) {
  return this.$$minus__O__Lscala_collection_mutable_Map(key)
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Map = (function(xs) {
  return this.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_Map(xs)
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_Map = (function(kv1, kv2, kvs) {
  return this.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_mutable_Map(kv1, kv2, kvs)
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.$$plus__Lscala_Tuple2__Lscala_collection_GenMap = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_mutable_Map(kv)
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.$$plus__Lscala_Tuple2__Lscala_collection_Map = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_mutable_Map(kv)
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.updated__O__O__Lscala_collection_GenMap = (function(key, value) {
  return this.updated__O__O__Lscala_collection_mutable_Map(key, value)
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.updated__O__O__Lscala_collection_Map = (function(key, value) {
  return this.updated__O__O__Lscala_collection_mutable_Map(key, value)
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.seq__Lscala_collection_Map = (function() {
  return this.seq__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.$$minus$eq__O__Lscala_collection_generic_Shrinkable = (function(elem) {
  return this.$$minus$eq__O__Lscala_collection_mutable_ListMap(elem)
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.$$minus$eq__O__Lscala_collection_mutable_MapLike = (function(key) {
  return this.$$minus$eq__O__Lscala_collection_mutable_ListMap(key)
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.$$plus$eq__O__Lscala_collection_generic_Growable = (function(elem) {
  return this.$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_ListMap(ScalaJS.as.scala_Tuple2(elem))
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.$$plus$eq__O__Lscala_collection_mutable_Builder = (function(elem) {
  return this.$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_ListMap(ScalaJS.as.scala_Tuple2(elem))
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_MapLike = (function(kv) {
  return this.$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_ListMap(kv)
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.empty__Lscala_collection_Map = (function() {
  return this.empty__Lscala_collection_mutable_ListMap()
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.empty__Lscala_collection_mutable_Map = (function() {
  return this.empty__Lscala_collection_mutable_ListMap()
});
ScalaJS.c.scala_collection_mutable_ListMap.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.init___.call(this);
  this.elems$5 = ScalaJS.modules.scala_collection_immutable_Nil();
  this.siz$5 = 0;
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ListMap = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ListMap.prototype = ScalaJS.c.scala_collection_mutable_ListMap.prototype;
ScalaJS.is.scala_collection_mutable_ListMap = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ListMap)))
});
ScalaJS.as.scala_collection_mutable_ListMap = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ListMap(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ListMap")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ListMap = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ListMap)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ListMap = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ListMap(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ListMap;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ListMap = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ListMap: 0
}, false, "scala.collection.mutable.ListMap", ScalaJS.data.scala_collection_mutable_AbstractMap, {
  scala_collection_mutable_ListMap: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_mutable_AbstractMap: 1,
  scala_collection_mutable_Map: 1,
  scala_collection_mutable_MapLike: 1,
  scala_collection_mutable_Cloneable: 1,
  scala_Cloneable: 1,
  java_lang_Cloneable: 1,
  scala_collection_generic_Shrinkable: 1,
  scala_collection_mutable_Builder: 1,
  scala_collection_generic_Growable: 1,
  scala_collection_generic_Clearable: 1,
  scala_collection_mutable_Iterable: 1,
  scala_collection_mutable_Traversable: 1,
  scala_Mutable: 1,
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
ScalaJS.c.scala_collection_mutable_ListMap.prototype.$classData = ScalaJS.data.scala_collection_mutable_ListMap;
//@ sourceMappingURL=ListMap.js.map
