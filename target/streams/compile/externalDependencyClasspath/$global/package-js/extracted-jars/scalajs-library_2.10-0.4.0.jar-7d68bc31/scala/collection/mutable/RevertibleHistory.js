/** @constructor */
ScalaJS.c.scala_collection_mutable_RevertibleHistory = (function() {
  ScalaJS.c.scala_collection_mutable_History.call(this)
});
ScalaJS.c.scala_collection_mutable_RevertibleHistory.prototype = new ScalaJS.inheritable.scala_collection_mutable_History();
ScalaJS.c.scala_collection_mutable_RevertibleHistory.prototype.constructor = ScalaJS.c.scala_collection_mutable_RevertibleHistory;
ScalaJS.c.scala_collection_mutable_RevertibleHistory.prototype.undo__V = (function() {
  var old = this.log__Lscala_collection_mutable_Queue().toList__Lscala_collection_immutable_List().reverse__Lscala_collection_immutable_List();
  this.clear__V();
  old.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x0$1) {
      var x1 = x0$1;
      matchEnd3: {
        if ((x1 !== null)) {
          var event = ScalaJS.as.scala_collection_mutable_Undoable(x1.$$und2__O());
          event.undo__V();
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break matchEnd3
        };
        throw new ScalaJS.c.scala_MatchError().init___O(x1)
      };
      return ScalaJS.bV(undefined)
    })
  })()))
});
ScalaJS.c.scala_collection_mutable_RevertibleHistory.prototype.undo__ = (function() {
  return ScalaJS.bV(this.undo__V())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_RevertibleHistory = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_RevertibleHistory.prototype = ScalaJS.c.scala_collection_mutable_RevertibleHistory.prototype;
ScalaJS.is.scala_collection_mutable_RevertibleHistory = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_RevertibleHistory)))
});
ScalaJS.as.scala_collection_mutable_RevertibleHistory = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_RevertibleHistory(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.RevertibleHistory")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_RevertibleHistory = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_RevertibleHistory)))
});
ScalaJS.asArrayOf.scala_collection_mutable_RevertibleHistory = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_RevertibleHistory(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.RevertibleHistory;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_RevertibleHistory = new ScalaJS.ClassTypeData({
  scala_collection_mutable_RevertibleHistory: 0
}, false, "scala.collection.mutable.RevertibleHistory", ScalaJS.data.scala_collection_mutable_History, {
  scala_collection_mutable_RevertibleHistory: 1,
  scala_collection_mutable_Undoable: 1,
  scala_collection_mutable_History: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_mutable_Subscriber: 1,
  scala_collection_mutable_AbstractIterable: 1,
  scala_collection_mutable_Iterable: 1,
  scala_collection_mutable_Traversable: 1,
  scala_Mutable: 1,
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
ScalaJS.c.scala_collection_mutable_RevertibleHistory.prototype.$classData = ScalaJS.data.scala_collection_mutable_RevertibleHistory;
//@ sourceMappingURL=RevertibleHistory.js.map
